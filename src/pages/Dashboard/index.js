import React, { Component } from 'react';
class Dashboard extends Component {
    render () {
        return (
            <div>
                <h1>Dashboard</h1>
                <pre>
                    {JSON.stringify(this.props.user,null, 2)}
                </pre>
                <a onClick={()=>this.props.logoutUser()}>logout</a>
            </div>
        );
    }
}

//now the redux integration layer
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/users';

function mapStateToProps (state) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    logoutUser: () => {
        dispatch(logoutUser());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);