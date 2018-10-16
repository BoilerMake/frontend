import React, { PureComponent } from 'react';
import Hr from '../../components/Hr';

class DecisionTransitMethod extends PureComponent {
  renderFBEvent() {
    const school = this.props.applicationForm.school.name;

    if (school === 'Illinois Institute of Technology') {
      return (
        <p>
          Join the Facebook event
          <a href="https://www.facebook.com/events/239299703382184/">here</a>
          to stay up to date!
        </p>
      );
    } else if (school === 'University of Illinois-Urbana-Champaign') {
      return (
        <p>
          Join the Facebook event
          <a href="https://www.facebook.com/events/311715542939901/">here</a>
          to stay up to date!
        </p>
      );
    } else {
      return null;
    }
  }

  renderHasBus() {
    const school = this.props.applicationForm.school.name;
    return (
      <div className="p-transit_method__description">
        <p>We'll be sending a bus to {school}!</p>
        {this.renderFBEvent()}
      </div>
    );
  }

  renderHasCar() {
    return (
      <div className="p-transit_method__description">
        <p>
          Sadly we won't be able to send a bus to{' '}
          <b>{this.props.applicationForm.school.name}.</b>
        </p>
        <p>
          However, if you're willing to get here by your own means, we'd love to
          have you!.
        </p>
        <p>
          <i>
            Please note that we will not be providing any form of travel
            reimbursements.
          </i>
        </p>
      </div>
    );
  }

  renderHasFeet() {
    return (
      <p className="p-transit_method__description">
        Well, you have it easy! BoilerMake will be happening in Hicks
        Undergraduate Library on campus.
      </p>
    );
  }

  render() {
    return (
      <div className="p-transit_method">
        <Hr>Getting to BoilerMake</Hr>
        <br />
        {this.props.method === 'bus' ? this.renderHasBus() : null}
        {this.props.method === 'car' ? this.renderHasCar() : null}
        {this.props.method === 'walk' ? this.renderHasFeet() : null}
      </div>
    );
  }
}

export default DecisionTransitMethod;
