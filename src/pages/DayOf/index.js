import React, { Component } from 'react';
import Schedule from '../../components/Schedule';
import Announcements from './Announcements';

class DayOf extends Component {
  // I want to make a countdown, but later is ok
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     timerText: 'initializing...'
  //   };
  //   console.log(this.onChange);
  //   this.onChange = this.onChange.bind(this);
  // }
  //
  // componentWillMount() {
  //   // Set the date we're counting down to
  //   var countDownDate = new Date("Oct 1, 2017 15:37:25").getTime();
  //
  //   // Update the count down every 1 second
  //   var x = setInterval(function() {
  //
  //     // Get todays date and time
  //     var now = new Date().getTime();
  //
  //     // Find the distance between now an the count down date
  //     var distance = countDownDate - now;
  //
  //     // Time calculations for days, hours, minutes and seconds
  //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //
  //     // Display the result in the element with id="demo"
  //     let timerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  //     this.setState({timerText: timerText});
  //     // this.setState({timerText: timerText});
  //
  //     // If the count down is finished, write some text
  //     if (distance < 0) {
  //       clearInterval(x);
  //       document.getElementById("demo").innerHTML = "EXPIRED";
  //     }
  //   }, 1000);
  // }

  render () {
    return (
      <div className="landing-page">
        <div className="live-wrapper row">
          <div className="quick-links">
            <div className="header">Quick Links</div>
            <a href="https://help.boilermake.org/"><div className="link">Need <b>Technical Help?</b></div></a>
            <a href="http://invite.boilermake.org"><div className="link">Want to <b>socialize?</b></div></a>
            <a href="https://boilermake-v.devpost.com/"><div className="link">Interested in <b>prizes?</b></div></a>
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
