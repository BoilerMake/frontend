import React from 'react';
import { githubLogin } from '../actions';

const NavLeft = () => (
    <div onClick={githubLogin}>
        click to login with Github
    </div>
);

export default NavLeft;
