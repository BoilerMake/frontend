import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ApplicationTextField from './ApplicationTextField';
import ApplicationToggle from './ApplicationToggle';
import ApplicationSelectField from './ApplicationSelectField';
import ResumeUploadProgressIndicator from './ResumeUploadProgressIndicator';
import {raceOptions, genderOptions, gradYearOptions, isFirstHackathonOptions } from './ApplicationConsts';

class ApplicationForm extends Component {
    render () {
        const { applicationForm, validation}  = this.props.application;
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
                        <ApplicationSelectField field="grad_year" searchable options={gradYearOptions}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 paddingr">
                      <label>LinkedIn Username</label>
                      { applicationForm.has_no_linkedin ?
                          <div>
                              <ApplicationTextField field="linkedin" flattenBottomCorners  disabled/>
                              <button onClick={this.props.toggleApplicationFieldValue.bind(this,'has_no_linkedin')} className="opt-out-button">I do actually</button>
                          </div>
                      :
                          <div>
                              <ApplicationTextField field="linkedin" flattenBottomCorners/>
                              <button onClick={this.props.toggleApplicationFieldValue.bind(this,'has_no_linkedin')} className="opt-out-button">No thanks</button>
                          </div>
                      }
                    </div>
                    <div className="col-6">
                      <label>GitHub Username</label>
                      {
                          applicationForm.has_no_github && !isGithubLinked
                          ? <div>
                              <ApplicationTextField field="github" flattenBottomCorners disabled/>
                              <button onClick={this.props.toggleApplicationFieldValue.bind(this,'has_no_github')} className="opt-out-button">I do actually</button>
                            </div>
                          : <div>
                              <ApplicationTextField field="github" flattenBottomCorners disabled={isGithubLinked}/>
                              {
                                  isGithubLinked
                                  ? <button className="opt-out-button"><i>You signed up with github, so you can't change the username</i></button>
                                  : <button onClick={this.props.toggleApplicationFieldValue.bind(this,'has_no_github')} className="opt-out-button">No thanks</button>
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
                      <label>Upload Resume (PDF only)</label>
                      <button type="button" onClick={() => { dropzoneRef.open() }} className="application-button">Drop or click to upload</button>
                      <ResumeUploadProgressIndicator/>
                      { applicationForm.resume_uploaded ? <div>You've uploaded <a href={applicationForm.resume_get_url} target="_blank" rel="noopener noreferrer" >{applicationForm.resume_filename}</a></div> : null }
                    </div>
                    <div className="col-6">
                        <label>Is this your first hackathon?</label>
                        <ApplicationSelectField field="isFirstHackathon" options={isFirstHackathonOptions}/>
                    </div>
                </div>
                <div className="row">
                    <div className="flex v-center">
                        <ApplicationToggle field="tandc_1"/>
                        <label className="marginl last-check-s">I will be 18 or older by Sept 29, 2017.</label>
                    </div>
                </div>
                <div className="row">
                    <div className="flex v-center">
                        <ApplicationToggle field="tandc_2"/>
                        <label className="marginl last-check-s">I agree to the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">MLH code of conduct</a></label>
                    </div>
                </div>
                <div className="row">
                    <div className="flex v-center">
                        <ApplicationToggle field="tandc_3"/>
                        <div className="marginl last-check" style={ { maxWidth: '700px' } }>
                            I agree to the terms of both the&nbsp;
                            <a href="https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions" target="_blank" rel="noopener noreferrer">
                                MLH Contest Terms and Conditions
                            </a>
                            &nbsp;and the&nbsp;
                            <a href="https://mlh.io/privacy" target="_blank" rel="noopener noreferrer">
                                MLH Privacy Policy.&nbsp;
                            </a>
                            Please note that you may receive pre and post-event informational
                            e-mails and occasional messages about hackathons from MLH as per
                            the MLH Privacy Policy.
                        </div>
                    </div>
                </div>
                <div className="row">
                    <p>You can edit your application until September 22.</p>
                    {!applicationForm.completed
                        ? <div>
                            <p>Your application is not complete:</p>
                            <ul>
                                {validation.reason_label.map(x=><li>{x}</li>)}
                            </ul>
                        </div>
                        : <p><b>Your application is complete! stay tuned.</b></p>}
                </div>
                <div className="row">
                    <button disabled={isLoading} onClick={()=>{this.props.saveApplication()}} className="submit">Save</button>
                </div>
            </Dropzone>
        );
    }
}

//now the redux integration layer
import {
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
        saveApplication,
        onResumeDrop,
        toggleApplicationFieldValue
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);
