import React from 'react';
import { githubLogin } from '../actions';

const GithubLoginButton = () => (
    <div onClick={githubLogin}>
        click to login with Github
    </div>
);

export default GithubLoginButton;
