import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ApplicationTextField from './ApplicationTextField';
import SchoolInputField from './SchoolInputField';
import ResumeUploadProgressIndicator from './ResumeUploadProgressIndicator';
// import Select from 'react-select';

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
                style={{border: 'none', height: '100%'}}
            >
                <div className="row">
                    <div className="col-6">
                      <label>First Name</label>
                      <ApplicationTextField field="first_name"/>
                    </div>
                    <div className="col-6">
                      <label>Last Name</label>
                      <ApplicationTextField field="last_name"/>
                    </div>
                </div>
                <div className="row">
                    <label>School</label>
                    <SchoolInputField/>
                </div>
                <div className="row">
                    <div className="col-6 paddingr">
                      <label>Major</label>
                      <ApplicationTextField field="major"/>
                    </div>
                    <div className="col-6">
                      <label>Expected Graduation</label>
                      <ApplicationTextField field="grad_year"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 paddingr">
                      <label>Upload Resume</label>
                      <button type="button" onClick={() => { dropzoneRef.open() }} className="application-button">Drop or click to upload</button>
                      <ResumeUploadProgressIndicator/>
                      { applicationForm.resume_uploaded ? <div>You've uploaded <a href={applicationForm.resume_get_url} target="_blank" rel="noopener noreferrer" >{applicationForm.resume_filename}</a></div> : null }
                    </div>
                    <div className="col-6">
                      <label>First Hackathon?</label>
                      <ApplicationTextField field="is_first_hackathon"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 paddingr">
                      <label>LinkedIn Username</label>
                      { applicationForm.has_no_linkedin ?
                          <div>You indicated you don't have a Linedin <button onClick={this.toggleItem.bind(this,'has_no_linkedin')} className="opt-in-button">I do!</button></div>
                      :
                          <div>
                              <ApplicationTextField field="linkedin" styles={ { 'border-bottom-left-radius': 0, 'border-bottom-right-radius': 0 } }/>
                              <button onClick={this.toggleItem.bind(this,'has_no_linkedin')} className="opt-out-button">No thanks</button>
                          </div>
                      }
                    </div>
                    <div className="col-6">
                      <label>GitHub Username</label>
                      { applicationForm.has_no_github && !isGithubLinked ?
                          <div>You indicated you don't have a Github <button onClick={this.toggleItem.bind(this,'has_no_github')} className="opt-in-button">I do!</button></div>
                      :
                          <div>
                              <ApplicationTextField field="github" disabled={isGithubLinked} styles={ { 'border-bottom-left-radius': 0, 'border-bottom-right-radius': 0 } }/>
                              { isGithubLinked ?
                                  <i>You signed up with github, so you can't change the username</i>
                              :
                                  <button onClick={this.toggleItem.bind(this,'has_no_github')} className="opt-out-button">No thanks</button>
                              }
                          </div>
                      }
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label>Gender</label>
                        {/* <Select ref="schoolSelect"
                                simpleValue
                                options={ [ { value: 'male', label: 'Male'}, {value: 'female', label: 'Female'} ] }
                                clearable={true}
                                name="gender"
                                value={this.state.name}
                                onChange={this.updateValue.bind(this)}
                                searchable={false}
                        /> */}
                    </div>
                </div>
                <div className="row">
                    <p>
                        TODO:
                        Graduation Year (dropdown??)
                        Gender (what format?)
                        Race (dropdown??)
                        Is this your first hackathon (yesno picker or radio??)
                    </p>
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
