import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {toastr} from 'react-redux-toastr'
import { recordStatEvent } from '../../actions';
import { Line } from 'rc-progress';
import 'rc-progress/assets/index.css';


class Application extends Component {

    constructor (props) {
        super(props);
        this.state = {
            application: {},
            me: {},
            uploadProgress: 0,
            isUploading: false,
        };
    }

    onResumeDrop(accepted, rejected) {
        console.log(accepted,rejected);
        if(rejected.length > 0) {
            toastr.error("Upload error","Resume must be a PDF");
            console.log("wrong filetype");
            recordStatEvent("resumeUploadError",null,{rejected});
            return;
        } else if(accepted.length !== 1) {
            toastr.error("Upload error");
            recordStatEvent("resumeUploadError",null,{accepted});
            console.log("err");
            return;
        }
        this.setState({
            uploadedFile: accepted[0]
        });
        console.log(accepted);
        this.handleResumeUpload(accepted[0]);
    }

    handleResumeUpload(file) {
        let fileName = file.name;
        toastr.info("hang tight!",`uploading ${fileName}`);

        //fetch doesn't let us get progress information, so we need to use vanilla XHR
        let xhr = new XMLHttpRequest();
        console.log('OPENED', xhr.status);
        this.setState({isUploading: true});

        xhr.onprogress =  () => {
            console.log('LOADING', xhr.status);
        };

        xhr.onload = () => {
            let { status } = xhr;
            console.log('DONE',status);
            if(status===200) {
                this.setState({isUploading: false});
                toastr.success('Resume Upload Success', `uploaded ${fileName}`);
                this.setState({application: {
                    ...this.state.application,
                    resume_uploaded: true,
                    resume_filename: fileName
                }});
                this.saveApplication(true);
                recordStatEvent("resumeUploadFinished",null,{success: true, fileName});
            } else {
                toastr.error('Oops!','something went wrong... try again');
                recordStatEvent("resumeUploadFinished",null,{success: false, fileName, status});
            }
        };

        xhr.upload.addEventListener('progress',(e) => {
            let uploadProgress = e.loaded/e.total*100;
            console.log(uploadProgress);
            this.setState({uploadProgress});
        });

        let fd = new FormData();
        fd.append('Content-Type', file.type);
        fd.append("file",file);
        xhr.open('PUT', this.state.application.resume_put_url);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.send(fd);
    }

    componentDidMount() {
        this.seedState(this.props);
        this.props.fetchApplication();
    }

    componentWillReceiveProps(nextProps) {
        this.seedState(nextProps)
    }

    seedState(props) {
        if (!props.user.loading && props.user.me && !props.application.loading ) {
            this.setState({me: props.user.me, application: props.application.application});
        }
    }

    applicationTextChange(prop,e) {
        this.setState({application: {
            ...this.state.application,
            [prop]: e.target.value,
        }});
    }

    toggleItem(item) {
        this.setState({application: {
            ...this.state.application,
            [item]: !this.state.application[item]
        }});
    }

    saveApplication(supressToast=false) {
        this.props.updateApplication(this.state.application,supressToast);
    }

    render () {
        const app = this.state.application;
        const isLoading = this.props.application.loading;
        const isGithubLinked = this.state.me.github_user_id !== null;
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
                                    <input value={app.linkedin} onChange={this.applicationTextChange.bind(this,"linkedin")}/>
                                    <button onClick={this.toggleItem.bind(this,'has_no_linkedin')}>i don't have one</button>
                                  </div>
                        }
                    </div>
                    <br/>
                    Github <input disabled={isGithubLinked} value={app.github} onChange={this.applicationTextChange.bind(this,"github")}/>
                    {isGithubLinked ? <i>You signed up with github, so you can't change the username</i> : null}
                    <br/>


                    <button disabled={isLoading} onClick={this.saveApplication.bind(this)}>save</button>
                    <hr/>

                    Drag your resume anywhere on the page or....
                    <button type="button" onClick={() => { dropzoneRef.open() }}>
                        Open File Dialog
                    </button>
                    { this.state.isUploading ? <Line percent={this.state.uploadProgress} strokeWidth="2" strokeColor="#1A2A50" /> : null }
                    { app.resume_uploaded ? <div>You've uploaded <a href={app.resume_get_url} target="_blank" rel="noopener noreferrer" >{app.resume_filename}</a></div> : null }
                    <hr/>
                    <pre>{JSON.stringify(this.state.application,null, 2)}</pre>
                </div>
            </Dropzone>

        );
    }
}

//now the redux integration layer
import { fetchApplication, updateApplication } from '../../actions/application';
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
    updateApplication: (data) => {
        dispatch(updateApplication(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
