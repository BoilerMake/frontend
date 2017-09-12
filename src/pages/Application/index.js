import React, { Component } from 'react';
import ApplicationForm from './ApplicationForm'
import ApplicationDecision from './ApplicationDecision'
import NeedToConfirmEmailDialog from './NeedToConfirmEmailDialog'
class Application extends Component {
    componentDidMount() {
        this.props.fetchMe();
        this.props.fetchApplication();
        this.props.fetchSchoolList();
    }
    render () {
        let { me } = this.props.user;
        let { applicationForm } = this.props.application;
        let isUserConfirmed = me && me.confirmed;
        let doesUserHaveDecision = (applicationForm.decision !== null) && (applicationForm.decision !== undefined) && (applicationForm.decision !== 0);
        if(!me || !applicationForm)
            return null;
        return (
          <div className="fancy">
            <div className="fullWidthContainer application">
                { doesUserHaveDecision
                    ? <ApplicationDecision/>
                    : ( isUserConfirmed
                        ? <div><h1 className="title app-heading left">Application</h1><ApplicationForm /></div>
                        : <NeedToConfirmEmailDialog />)
                }
            </div>
          </div>
        );
    }
}

//now the redux integration layer
import { fetchApplication, fetchSchoolList } from '../../actions/application';
import { fetchMe } from '../../actions/users';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

function mapStateToProps (state) {
    return {
        user: state.user,
        application: state.application
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchApplication,
        fetchSchoolList,
        fetchMe
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
