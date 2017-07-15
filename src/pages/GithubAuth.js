import React, { Component } from 'react';
import { githubLogin } from '../actions';
import { Redirect } from 'react-router-dom'
import { parse } from 'qs'

class GitHubAuth extends Component {
    constructor (props) {
        super(props);
        this.state = { loading: false };
    }
    render () {
        if(this.props.user.me && this.props.user.me.github_user_id)
        //todo: show a toast or something
            return (<Redirect to="/dashboard"/>);
        const query = parse(this.props.location.search.substr(1));
        let { code } = query;
        if (code && !this.state.loading) {
            this.setState({loading: true});
            this.props.authUserWithGithub(code);
        } else if(!code) {
            githubLogin();
        }
        // } else if(this.state.code === null) {
        //     this.setState({code});
        // }
        return(<div><h1>loading...</h1></div>);
    }
}

//now the redux integration layer
import { connect } from 'react-redux'
import { authUserWithGithub } from '../actions/users';

function mapStateToProps (state) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    authUserWithGithub: (code) => {dispatch(authUserWithGithub(code))}
});

export default connect(mapStateToProps, mapDispatchToProps)(GitHubAuth);