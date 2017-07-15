import React, { Component } from 'react';
import ApplicationForm from './ApplicationForm'
class Application extends Component {
    render () {
        return (
            <div className="pageContainer">
                <h1>Application</h1>
                <ApplicationForm />
            </div>
        );
    }
}

//now the redux integration layer
import { fetchApplication } from '../../actions/application';
import { connect } from 'react-redux'
function mapStateToProps (state) {
    return {
        user: state.user,
        application: state.application
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchApplication: () => {
        dispatch(fetchApplication());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
