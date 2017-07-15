import cookie from 'react-cookie';
import Hashids from 'hashids';
import ReactGA from 'react-ga';
import { API_BASE_URL, DEBUG_MODE, GITHUB_CLIENT_ID } from '../config';

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

export default function apiFetch(url, options = {}) {

    let uuid = cookie.load('uuid');
    //if we don't have a uuid cookie set, generate a fresh one
    //uuid has 3 parts, separated by dash:
    //  Client identifier (i.e.) this is coming from React (r for short)
    //  HashId(current_unix_timestamp)
    // (random4digitstring)
    if(!uuid) {
        let hid = new Hashids();
        uuid = `r-${hid.encode(Math.floor(Date.now()))}-${s4()}`;
        console.log("saving new uuid",uuid);
        cookie.save('uuid',uuid, {path: '/'});
    }

    options.headers = {
        "Authorization": "Bearer "+cookie.load('token'),
        "X-debug-token": cookie.load('debug-token'),
        "X-UUID": uuid,
    };
    return fetch(url,options);
}

export function recordStatEvent(event, subtitle, context) {
    ReactGA.event({
        category: 'BoilerMake-Web',
        action: event,
        label: subtitle
    });

    //and off to our API
    let d = new FormData();
    d.append('event', event);
    d.append('subtitle', subtitle);
    d.append('context', JSON.stringify(context));
    d.append('client', 'react');
    return apiFetch(`${API_BASE_URL}/stats`,
        {
            method: 'POST',
            body:   d,
        })
        .then(() => {
        if (DEBUG_MODE)
            console.log("[stat] logged event",{event, subtitle, context})
        });
}

export function githubLogin() {
    window.location = `http://github.com/login/oauth/authorize?scope=user:email&client_id=${GITHUB_CLIENT_ID}`
}