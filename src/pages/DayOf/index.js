import React, { Component } from 'react';
import Schedule from '../../components/Schedule';
import Announcements from './Announcements';

class DayOf extends Component {
  // I want to make a countdown, but later is ok
  constructor(props) {
    super(props);
    this.state = {
      timerText: 'timer initializing'
    };
  }

  pad(n, width, z) {
    z = z || '0';
    n += '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  componentWillMount() {
    // Set the date we're counting down to
    var countDownDate = new Date("Oct 1, 2017 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval( () => {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      let timerText = days + ":" + this.pad(hours, 2) + ":" + this.pad(minutes, 2) + ":" + this.pad(seconds, 2) + "";
      this.setState({timerText: timerText});
      // this.setState({timerText: timerText});

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  render () {
    return (
      <div className="landing-page">

        <div className="live-wrapper row">
          <div className="quick-links">
            <div className="header">Quick Links</div>
            <a href="https://help.boilermake.org/"><div className="link">Need <b>Technical Help?</b></div></a>
            <a href="http://invite.boilermake.org"><div className="link">Want to <b>socialize?</b></div></a>
            <a href="https://boilermake-v.devpost.com/"><div className="link">Interested in <b>prizes?</b></div></a>
            <a href="https://www.facebook.com/media/set/?set=a.938985576240526.1073741836.235489296590161&type=1&l=e709772f8e"><div className="link">Want to see <b>photos?</b></div></a>
              <h3 className="center title">{this.state.timerText}</h3>
              <h5 className="center title" style={ { marginTop: '-20px' } }>Left to hack</h5>
          </div>
          <div className="main-content">
            <Announcements/>
          </div>
        </div>
        <div className="graybg">
          <Schedule/>
        </div>
      </div>
    )
  }
}

export default DayOf
