import deepFreeze from 'deep-freeze';
import { assert } from 'chai';
import reducer_user from './reducer_user.js';

const initialState = {
    authenticated: false,
    me: null,
    error: null,
    loading: false,
    token_data: null,
    token: null
};

deepFreeze(initialState);

it('handles default action', () => {
    const newState = reducer_user(initialState, {
        type: 'none'
    });
    assert.deepEqual(initialState, newState);
});
describe('handles LOGIN_FROM_JWT_SUCCESS', ()=>{
    const newState = reducer_user(initialState, {
        type: 'LOGIN_FROM_JWT_SUCCESS',
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InRlc3ROYW1lIiwiYWRtaW4iOnRydWV9._V3AldnPL5mi7e4l27jAOuRsuKacI8ODRzjn7M2UQaU"
    });
    it('sets authenticated to true', () => {
        assert.isTrue(newState.authenticated);
    });
    it('decodes JWT data', () => {
        assert.equal(newState.token_data.name, "testName");
    });
});
it('handles LOGOUT_USER', ()=>{
    const newState = reducer_user(initialState, {
        type: 'LOGOUT_USER',
    });
    assert.deepEqual(initialState, newState);
})
it('handles REQUEST_ME', ()=>{
    const newState = reducer_user(initialState, {
        type: 'REQUEST_ME',
    });
    assert.equal(newState.loading,true);
})
it('handles RECEIVE_ME', ()=>{
    const newState = reducer_user(initialState, {
        type: 'RECEIVE_ME',
        me: {
            data: "me-data"
        }
    });
    assert.equal(newState.loading,false);
    assert.equal(newState.me,"me-data");
})