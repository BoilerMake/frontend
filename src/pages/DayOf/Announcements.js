import React, { Component } from 'react';
import moment from 'moment';
class Announcements extends Component {
    componentDidMount() {
        this.props.fetchAnnouncements();
        setInterval(()=>{this.props.fetchAnnouncements()},5*60*1000);
    }
    render () {
        return (
        <div className="announcements">
            <div className="header">Announcements</div>
            <div className="row announcements-container">
                {this.props.dayof.announcements.map(a=> {
                    let when = moment.utc(a.created_at);
                    return(<div key={a.id} className="announcement">
                        <b className="capitalize">{when.fromNow()} <i>({when.format('ddd, h:mm a')})</i></b>
                        <br/>
                        <p>{a.body}</p>
                    </div>)
                })}
            </div>
        </div>
        );
    }
}

import { fetchAnnouncements } from '../../actions/dayof';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
function mapStateToProps (state) {
    return {
        dayof: state.dayof
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchAnnouncements
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Announcements);
