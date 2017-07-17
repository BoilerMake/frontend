import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {toastr} from 'react-redux-toastr'
import { recordStatEvent } from '../../actions';
import { Line } from 'rc-progress';
import 'rc-progress/assets/index.css';

class Application extends Component {

    onResumeDrop(accepted, rejected) {
        console.log(accepted,rejected);
        if(rejected.length > 0) {
            toastr.error("Upload error","Resume must be a PDF");
            console.log("wrong filetype");
            recordStatEvent("resumeUploadError",null,{rejected});
            return;
        } else if(accepted.length !== 1) {
            toastr.error("Upload error","please try again");
            recordStatEvent("resumeUploadError",null,{accepted});
            console.log("err");
            return;
        }
        console.log(accepted);
        this.handleResumeUpload(accepted[0]);
    }

    handleResumeUpload(file) {
        let fileName = file.name;
        //todo: combine these two
        this.props.startResumeUpload(fileName);

        /*
         * fetch doesn't let us get progress information, so we need to use vanilla XHR
         */
        let xhr = new XMLHttpRequest();

        xhr.onload = () => {
            let { status } = xhr;
            this.props.finishResumeUpload(fileName,status);
        };

        xhr.upload.addEventListener('progress',(e) => {
            this.props.resumeUploadProgress(e);
        });

        let fd = new FormData();
        fd.append('Content-Type', file.type);
        fd.append("file",file);
        xhr.open('PUT', this.props.application.application.resume_put_url);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.send(fd);
    }

    componentDidMount() {
        this.props.fetchApplication();
    }

    applicationTextChange(prop,e) {
        this.props.changeApplicationFieldValue(prop,e.target.value);
    }

    toggleItem(item) {
        this.props.toggleApplicationFieldValue(item);
    }

    saveApplication() {
        this.props.updateApplication();
    }

    render () {
        const app = this.props.application.application;
        const isLoading = this.props.application.loading;
        const isGithubLinked = this.props.user.me && (this.props.user.me.github_user_id !== null);
        let dropzoneRef;
        return (
            <Dropzone
                ref={(node) => { dropzoneRef = node; }}
                disableClick
                multiple={false}
                accept="application/pdf"
                onDrop={this.onResumeDrop.bind(this)}
                style={{}}
            >
                <div>
                    First Name <input value={app.first_name} onChange={this.applicationTextChange.bind(this,"first_name")}/>
                    <br/>
                    Last Name <input value={app.last_name} onChange={this.applicationTextChange.bind(this,"last_name")}/>
                    <br/>

                    <div>LinkedIn
                        {
                            app.has_no_linkedin
                                ? <a>You indicated you don't have a Linedin <button onClick={this.toggleItem.bind(this,'has_no_linkedin')}>i do!</button></a>
                                : <div>
                                    <input value={app.linkedin || ""} onChange={this.applicationTextChange.bind(this,"linkedin")}/>
                                    <button onClick={this.toggleItem.bind(this,'has_no_linkedin')}>i don't have one</button>
                                  </div>
                        }
                    </div>
                    <br/>
                    Github <input disabled={isGithubLinked} value={app.github || ""} onChange={this.applicationTextChange.bind(this,"github")}/>
                    {isGithubLinked ? <i>You signed up with github, so you can't change the username</i> : null}
                    <br/>


                    <button disabled={isLoading} onClick={this.saveApplication.bind(this)}>save</button>
                    <hr/>

                    Drag your resume anywhere on the page or....
                    <button type="button" onClick={() => { dropzoneRef.open() }}>
                        Open File Dialog
                    </button>
                    { this.props.application.isUploading ? <Line percent={this.props.application.uploadProgress} strokeWidth="2" strokeColor="#1A2A50" /> : null }
                    { app.resume_uploaded ? <div>You've uploaded <a href={app.resume_get_url} target="_blank" rel="noopener noreferrer" >{app.resume_filename}</a></div> : null }
                    <hr/>
                    <pre>{JSON.stringify(this.props.application,null, 2)}</pre>
                </div>
            </Dropzone>

        );
    }
}

//now the redux integration layer
import {
    fetchApplication,
    updateApplication,
    startResumeUpload,
    finishResumeUpload,
    changeApplicationFieldValue,
    toggleApplicationFieldValue,
    resumeUploadProgress } from '../../actions/application';
import { connect } from 'react-redux'
function mapStateToProps (state) {
    return {
        user: state.user,
        application: state.application
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchApplication: () => {
        dispatch(fetchApplication());
    },
    updateApplication: () => {
        dispatch(updateApplication());
    },
    startResumeUpload: (fileName) => {
        dispatch(startResumeUpload(fileName))
    },
    finishResumeUpload: (fileName, status) => {
        dispatch(finishResumeUpload(fileName, status))
    },
    resumeUploadProgress: (progress) => { dispatch(resumeUploadProgress(progress))},

    changeApplicationFieldValue: (field, value) => {
        dispatch(changeApplicationFieldValue(field, value));
    },
    toggleApplicationFieldValue: (field) => {
        dispatch(toggleApplicationFieldValue(field));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
