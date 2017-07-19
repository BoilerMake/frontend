import React, { Component } from 'react';
import AccountForm from './AccountForm'
class Dashboard extends Component {
    handleSubmit = (values) => {
        console.log('submit',values);
        this.props.updateMe(values);
    }
    render () {
        let { me } = this.props.user;
        if(!me)
            return(<div className="pageContainer"><h1>Dashboard loading...</h1></div>);
        return (
            <div className="pageContainer">
                <h1>Dashboard</h1>
                <pre>
                    {JSON.stringify(this.props.user,null, 2)}
                </pre>
                <button onClick={()=>this.props.logoutUser()}>logout</button>
                <hr/>
                <AccountForm onSubmit={this.handleSubmit}/>
                <hr/>
                Connected to GitHub? {me.github_user_id ? 'yes' : 'no'}
                <br/>
                Email confirmed? {me.confirmed ? 'yes' : 'no'}
            </div>
        );
    }
}

//now the redux integration layer
import { connect } from 'react-redux'
import { logoutUser, updateMe } from '../../actions/users';

function mapStateToProps (state) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    logoutUser: () => {
        dispatch(logoutUser());
    },
    updateMe: (me) => {
        dispatch(updateMe(me));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);