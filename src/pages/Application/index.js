import React, { Component } from 'react';
import ApplicationDecision from './ApplicationDecision'
class Application extends Component {
    componentDidMount() {
        this.props.fetchMe();
        this.props.fetchApplication();
        this.props.fetchSchoolList();
    }
    render () {
        let { me } = this.props.user;
        let { applicationForm, loading } = this.props.application;
        let doesUserHaveDecision = (applicationForm.decision !== null) && (applicationForm.decision !== undefined) && (applicationForm.decision !== 0);
        if(!me || !applicationForm || loading)
            return (<div className="fancy">
                <div className="fullWidthContainer application" style={{height: '1000px'}}>
                    <h1 className="title app-heading left">Application Loading...</h1>
                </div>
            </div>)
        return (
          <div className="fancy">
            <div className="fullWidthContainer application">
                { doesUserHaveDecision
                    ? <ApplicationDecision/>
                    : <h1 className="title app-heading left">Applications Closed.</h1>
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
