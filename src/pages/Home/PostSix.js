import React, { PureComponent } from 'react';
import { Button } from 'bm-kit';

import BackCloud from '../../assets/images/hero/back_cloud_dark.svg';
import MiddleCloud from '../../assets/images/hero/middle_cloud_dark.svg';
import FrontCloud from '../../assets/images/hero/front_cloud_dark.svg';

import Hammers from '../../assets/images/dark_hammers.svg';

import './_pillar.post_six.source.scss';

class PostSix extends PureComponent {
  redirectToApplication() {
    window.location =
      'https://docs.google.com/forms/d/e/1FAIpQLSd5hvEUwVlCa69NwRkkzXJalt4FiRzDBbDMo5gl41v4Z2vyOw/viewform';
  }

  render() {
    return (
      <div className="p-post_six">
        <div className="p-post_six__recruitment paddingx">
          <p className="paddingr">BoilerMake is looking for new members!</p>
          <Button onClick={this.redirectToApplication}>Apply</Button>
        </div>
        <div className="p-post_six__note">
          <img src={Hammers} className="p-post_six__hammers" alt="" />
          <p>
            Everything we do is for you -<br />
            the hackers, the designers,
            <br />
            the innovators, and the dreamers.
          </p>
          <p>
            You are at the core of every decision.
            <br />
            You are the focus of our work.
            <br />
          </p>
          <p>We owe this to you because you inspire us.</p>
          <p>Thank you for letting us inspire you.</p>
          <p className="signature">- The BoilerMake VI Team</p>
        </div>
        <div className="p-post_six__clouds">
          <img src={BackCloud} className="p-post_six__cloud" alt="" />
          <img src={MiddleCloud} className="p-post_six__cloud" alt="" />
          <img src={FrontCloud} className="p-post_six__cloud" alt="" />
        </div>
      </div>
    );
  }
}

export default PostSix;
