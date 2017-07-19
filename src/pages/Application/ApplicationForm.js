import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ApplicationTextField from './ApplicationTextField';
import SchoolInputField from './SchoolInputField';
import ResumeUploadProgressIndicator from './ResumeUploadProgressIndicator';

class ApplicationForm extends Component {

    // componentDidMount() {
    //      this.props.fetchApplication();
    // }

    toggleItem(item) {
        this.props.toggleApplicationFieldValue(item);
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
                onDrop={this.props.onResumeDrop.bind(this)}
                style={{border: '1px solid red', height: '100%'}}
            >
                <div>
                    <div><b>First Name</b><ApplicationTextField field="first_name"/></div>
                    <div><b>Last Name</b><ApplicationTextField field="last_name"/></div>
                    <div><b>Major</b><ApplicationTextField field="major"/></div>

                    {/*TODO: move Linkedin to its own component? */}
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
                    {/*TODO: move Github to its own component? */}
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


                    <hr/>
                    Drag your resume anywhere on the page or....
                    <button type="button" onClick={() => { dropzoneRef.open() }}>Open File Dialog</button>
                    <ResumeUploadProgressIndicator/>

                    { applicationForm.resume_uploaded ? <div>You've uploaded <a href={applicationForm.resume_get_url} target="_blank" rel="noopener noreferrer" >{applicationForm.resume_filename}</a></div> : null }

                    <hr/>
                    <b>school</b><SchoolInputField/>
                    <pre>
                        TODO:
                        Graduation Year (dropdown??)
                        Gender (what format?)
                        Race (dropdown??)
                        Is this your first hackathon (yesno picker or radio??)
                    </pre>
                    <hr/>
                    <button disabled={isLoading} onClick={()=>{this.props.saveApplication()}}>save</button>
                    Does the server say your application is completed? {applicationForm.completed? ' yes! ': 'no...'}
                </div>
            </Dropzone>

        );
    }
}

//now the redux integration layer
import {
    fetchApplication,
    saveApplication,
    onResumeDrop,
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
        fetchApplication,
        saveApplication,
        onResumeDrop,
        toggleApplicationFieldValue
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);
