import React, { PureComponent } from 'react';

import BackCloud from '../../assets/images/hero/back_cloud_dark.svg';
import MiddleCloud from '../../assets/images/hero/middle_cloud_dark.svg';
import FrontCloud from '../../assets/images/hero/front_cloud_dark.svg';

import Hammers from '../../assets/images/dark_hammers.svg';

import './_pillar.post_six.source.scss';

class PostSix extends PureComponent {
  render() {
    return (
      <div className="p-post_six">
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
        <img src={BackCloud} className="p-post_six__back_cloud" alt="" />
        <img src={MiddleCloud} className="p-post_six__middle_cloud" alt="" />
        <img src={FrontCloud} className="p-post_six__front_cloud" alt="" />
      </div>
    );
  }
}

export default PostSix;
