import React, { Component } from 'react';
import ApplicationForm from './ApplicationForm'
import NeedToConfirmEmailDialog from './NeedToConfirmEmailDialog'
class Application extends Component {
    componentDidMount() {
        this.props.fetchMe();
        this.props.fetchApplication();
        this.props.fetchSchoolList();
    }
    render () {
        let me = this.props.user.me;
        let isUserConfirmed = me && me.confirmed;
        if(!me || !this.props.application.applicationForm)
            return null;
        return (
            <div className="pageContainer">
                <h1>Application</h1>
                { isUserConfirmed
                    ? <ApplicationForm />
                    : <NeedToConfirmEmailDialog />
                }
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
