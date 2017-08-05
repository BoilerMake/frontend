import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ApplicationTextField from './ApplicationTextField';
import ApplicationToggle from './ApplicationToggle';
import ApplicationSelectField from './ApplicationSelectField';
import ResumeUploadProgressIndicator from './ResumeUploadProgressIndicator';
import {raceOptions, genderOptions } from './ApplicationConsts';

class ApplicationForm extends Component {

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
                    <ApplicationSelectField field="school_id" searchable options={this.props.schools}/>
                </div>
                <div className="row">
                    <div className="col-6 paddingr">
                      <label>Major</label>
                      <ApplicationTextField field="major"/>
                    </div>
                    <div className="col-6">
                      <label>Expected Graduation Year</label>
                      <ApplicationTextField field="grad_year"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 paddingr">
                      <label>LinkedIn Username</label>
                      { applicationForm.has_no_linkedin ?
                          <div>
                              <ApplicationTextField field="linkedin" styles={ { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } } disabled={ true }/>
                              <button onClick={this.toggleItem.bind(this,'has_no_linkedin')} className="opt-out-button">I do actually</button>
                          </div>
                      :
                          <div>
                              <ApplicationTextField field="linkedin" styles={ { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } }/>
                              <button onClick={this.toggleItem.bind(this,'has_no_linkedin')} className="opt-out-button">No thanks</button>
                          </div>
                      }
                    </div>
                    <div className="col-6">
                      <label>GitHub Username</label>
                      { applicationForm.has_no_github && !isGithubLinked ?
                        <div>
                          <ApplicationTextField field="github" disabled={ true} styles={ { 'borderBottomLeftRadius': 0, 'borderBottomRightRadius': 0 } }/>
                          <button onClick={this.toggleItem.bind(this,'has_no_github')} className="opt-out-button">I do actually</button>
                        </div>
                      :
                          <div>
                              <ApplicationTextField field="github" disabled={isGithubLinked} styles={ { 'borderBottomLeftRadius': 0, 'borderBottomRightRadius': 0 } }/>
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
                        <ApplicationSelectField field="gender" options={genderOptions}/>
                    </div>
                    <div className="col-6">
                        <label>Race</label>
                        <ApplicationSelectField field="race" options={raceOptions}/>
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                      <label>First Hackathon?</label>
                      <ApplicationToggle field="isFirstHackathon"/>
                    </div>
                    <div className="col-6">
                    </div>
                </div>
                <div className="row">
                    <button disabled={isLoading} onClick={()=>{this.props.saveApplication()}} className="submit">Save</button>
                    {/* Does the server say your application is completed? {applicationForm.completed? ' yes! ': 'no...'} */}
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
        application: state.application,
        schools: state.application.schools.map((school)=>({value: school.id, label: school.name})),
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
