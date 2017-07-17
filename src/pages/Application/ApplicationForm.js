import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {toastr} from 'react-redux-toastr'
import { recordStatEvent } from '../../actions';
import ApplicationTextField from './ApplicationTextField';
import ResumeUploadProgressIndicator from './ResumeUploadProgressIndicator';
import 'rc-progress/assets/index.css';

class Application extends Component {

    /*
     * Callback from Dropzone
     */
    onResumeDrop(accepted, rejected) {
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
        this.props.initResumeUpload(accepted[0]);
    }

    componentDidMount() {
        this.props.fetchApplication();
    }

    toggleItem(item) {
        this.props.toggleApplicationFieldValue(item);
    }

    saveApplication() {
        this.props.saveApplication();
    }

    render () {
        const applicationForm = this.props.application.applicationForm;
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
                style={{border: '1px solid red', height: '100%'}}
            >
                <div>
                    <div><b>First Name</b><ApplicationTextField field="first_name"/></div>
                    <div><b>Last Name</b><ApplicationTextField field="last_name"/></div>
                    <div><b>Major</b><ApplicationTextField field="major"/></div>

                    <div><b>LinkedIn</b>
                        {
                            applicationForm.has_no_linkedin
                                ? <a>You indicated you don't have a Linedin <button onClick={this.toggleItem.bind(this,'has_no_linkedin')}>i do!</button></a>
                                : <div>
                                    <ApplicationTextField field="linkedin"/>
                                    <button onClick={this.toggleItem.bind(this,'has_no_linkedin')}>i don't have one</button>
                                  </div>
                        }
                    </div>
                    <hr/>
                    {/*If a user signs up with a github (isGithubLinked), they can't change their github username, nor can they opt out of providing their username*/}
                    <div><b>Github</b>
                        {
                            applicationForm.has_no_github && !isGithubLinked
                                ? <a>You indicated you don't have a Github <button onClick={this.toggleItem.bind(this,'has_no_github')}>i do!</button></a>
                                : <div>
                                    <ApplicationTextField field="github" disabled={isGithubLinked}/>
                                    {
                                        isGithubLinked
                                            ? <i>You signed up with github, so you can't change the username</i>
                                            : <button onClick={this.toggleItem.bind(this,'has_no_github')}>i don't have a github</button>
                                    }
                                </div>
                        }
                    </div>


                    <button disabled={isLoading} onClick={this.saveApplication.bind(this)}>save</button>
                    <hr/>

                    Drag your resume anywhere on the page or....
                    <button type="button" onClick={() => { dropzoneRef.open() }}>Open File Dialog</button>
                    <ResumeUploadProgressIndicator/>

                    { applicationForm.resume_uploaded ? <div>You've uploaded <a href={applicationForm.resume_get_url} target="_blank" rel="noopener noreferrer" >{applicationForm.resume_filename}</a></div> : null }

                    <pre>
                        TODO:
                        School
                        Graduation Year
                        Gender
                        Race
                        Is this your first hackathon
                    </pre>
                </div>
            </Dropzone>

        );
    }
}

//now the redux integration layer
// import * as applicationActions from '../../actions/application';
import {
    initResumeUpload,
    fetchApplication,
    saveApplication,
    toggleApplicationFieldValue
} from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
function mapStateToProps (state) {
    return {
        user: state.user,
        application: state.application
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initResumeUpload,
        fetchApplication,
        saveApplication,
        toggleApplicationFieldValue
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
