import React, { Component } from 'react';
import { Button, Card } from 'bm-kit';
import ApplicationSelectField from './ApplicationSelectField';
import ApplicationRSVPToggle from './ApplicationRSVPToggle';
import { dietOptions, shirtOptions, skillOptions } from './ApplicationConsts';
import Hr from '../../components/Hr';

import DecisionTransitMethod from './DecisionTransitMethod';

class ApplicationDecision extends Component {
  renderRSVPYes() {
    const isLoading = this.props.application.loading;

    return (
      <div>
        <Hr>RSVP Details</Hr>
        <div className="p-decision__rsvp_yes">
          <h2>Awesome! We're excited to see you! Just a few more steps.</h2>
          <p>
            We will be providing everyone with lanyard nametags - you can pick
            up to 3 skills to be displayed on them. Lastly, if you have any
            special dietary requests not included here, please{' '}
            <a href="mailto:team@boilermake.org">email us!</a>
          </p>
          <div className="p-decision__rsvp_yes_form">
            <label>Pick up to 3 Skills</label>
            <ApplicationSelectField
              field="skills"
              multi
              searchable
              options={skillOptions}
            />
            <label>T-shirt size</label>
            <ApplicationSelectField field="tshirt" options={shirtOptions} />
            <label>Dietary Restrictions</label>
            <ApplicationSelectField
              field="diet"
              multi
              searchable
              options={dietOptions}
            />
          </div>
          <br />
          <Button
            disabled={isLoading}
            onClick={() => {
              this.props.saveApplication(false, true);
            }}
            full
          >
            Submit RSVP
          </Button>
        </div>
        <br />
      </div>
    );
  }

  renderRSVPNo() {
    return (
      <p className="p-decision__rsvp_no">
        We're sorry you can't make it{' '}
        <span role="img" aria-label="Sad">
          😢
        </span>{' '}
        <br />
        Please come back and apply next year though!{' '}
      </p>
    );
  }

  renderAccepted() {
    const { applicationForm } = this.props.application;

    return (
      <div>
        <div className="p-decision__status">
          {applicationForm.is_rsvp_confirmed === 1 ? (
            <div>
              <div className="appInfoBanner">
                Your RSVP has been recorded - we will see you at BoilerMake!
                <h2>
                  Your check in code is:{' '}
                  <b>
                    <code>{applicationForm.user.hashid}</code>
                  </b>
                  <br /> Please have this + your photo ID ready to expedite
                  check in.
                </h2>
              </div>
            </div>
          ) : (
            <p>
              Can you come? You must RSVP{' '}
              {applicationForm.rsvp_deadline ? (
                <span>by {applicationForm.rsvp_deadline}</span>
              ) : (
                <span>soon</span>
              )}{' '}
              or else we will offer your spot to someone else.
            </p>
          )}
          <h1>You're in!</h1>
          <p className="p-decision__notes">
            Congratulations! We’re excited to invite you to forge the future at
            BoilerMake VI.
            <br />
            BoilerMake will start around 6PM on Friday, October 19th and last
            until approximately 2PM on Sunday, October 21 on Purdue's campus in
            West Lafayette.
            <br />
            Please submit your RSVP so we know whether or not to expect you
            there!
          </p>
        </div>
        <DecisionTransitMethod
          method={applicationForm.school.transit_method}
          applicationForm={applicationForm}
        />
        <ApplicationRSVPToggle />
        {applicationForm.rsvp !== null
          ? applicationForm.rsvp === 1
            ? this.renderRSVPYes()
            : this.renderRSVPNo()
          : null //don't show rest of form if they haven't clicked yes or no yet
        }
      </div>
    );
  }

  renderWaitlist() {
    return (
      <div className="section">
        <h2 style={{ marginTop: 0 }}>Thanks for applying.</h2>
        <p>
          You're currently on our waitlist. But don’t fret! We’ll be looking at
          apps over the next week and will let you know if space opens up. We
          acknowledge how awesome you are and hope you can attend BoilerMake
          this year!
        </p>
      </div>
    );
  }

  renderExpired() {
    return (
      <div className="section">
        <h2>Your offer has expired.</h2>
        <p>
          Unfortunately, your acceptance offer has expired. We hope to see you
          at next year’s BoilerMake!
        </p>
      </div>
    );
  }

  renderDeclined() {
    return (
      <div className="section">
        <h2>We're sorry.</h2>
        <p>
          Unfortunately, we are not able to offer you a spot at BoilerMake this
          year. We really hope to see you next year!
        </p>
      </div>
    );
  }

  renderError() {
    return (
      <div className="section">
        <h1>There was an error!</h1>
        <p>
          Sorry for the inconvenience. Please email us at{' '}
          <a href="mailto:team@boilermake.org">team@boilermake.org</a>
        </p>
      </div>
    );
  }

  render() {
    // let decisionMap = {
    //     4: 'EXPIRED',
    //     3: 'ACCEPT',
    //     2: 'WAITLIST',
    //     1: 'REJECT',
    //     0: 'UNDECIDED'
    // };
    const { applicationForm } = this.props.application;

    return (
      <Card className="p-decision">
        {applicationForm.decision === 3 ? this.renderAccepted() : null}
        {applicationForm.decision === 2 ? this.renderWaitlist() : null}
        {applicationForm.decision === 4 ? this.renderExpired() : null}
        {applicationForm.decision === 1 ? this.renderDeclined() : null}
      </Card>
    );
  }
}

//now the redux integration layer
import {
  saveApplication,
  toggleApplicationFieldValue
} from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
function mapStateToProps(state) {
  return {
    user: state.user,
    application: state.application
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      saveApplication,
      toggleApplicationFieldValue
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationDecision);
