import React from 'react';
import { githubLogin } from '../actions';
import { ALLOW_SIGNUPS } from '../config';
const GithubLoginButton = () => {
    return ALLOW_SIGNUPS
        ? <div onClick={githubLogin}>click to login with Github</div>
        : null
};

export default GithubLoginButton;
