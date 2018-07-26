import React, { PureComponent } from 'react';
import './_pillar.day_of.source.scss';

class DayOf extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className="p-day_of">
        <img src="https://files.slack.com/files-pri/T02DG97DX-FBWRYG19A/livesite-smallchange.png" alt="ph" width="100%"/>
      </div>
    )
  }
}

export default DayOf
