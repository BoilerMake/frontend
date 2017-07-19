import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class ConfirmEmail extends Component {
    render () {
        if(this.props.user.me && this.props.user.me.confirmed)
            return (<Redirect to="/dashboard"/>);
        let { code } = this.props.match.params;
        this.props.confirmEmail(code);
        return(<div className="pageContainer"><h1>loading...</h1></div>);
    }
}

//now the redux integration layer
import { connect } from 'react-redux'
import { confirmEmail } from '../actions/users';

function mapStateToProps (state) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    confirmEmail: (code) => {dispatch(confirmEmail(code))}
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail);