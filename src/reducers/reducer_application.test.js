import deepFreeze from 'deep-freeze';
import { assert } from 'chai';
import reducer_application, { INITIAL_STATE } from './reducer_application.js';

const initialState = INITIAL_STATE;
deepFreeze(initialState);

it('handles default action', () => {
    const newState = reducer_application(initialState, {
        type: 'none'
    });
    assert.deepEqual(initialState, newState);
});


it('handles REQUEST_APPLICATION', ()=>{
    const newState = reducer_application(initialState, {
        type: 'REQUEST_APPLICATION',
    });
    assert.equal(newState.loading,true);
});
it('handles RECEIVE_APPLICATION', ()=>{
    const newState = reducer_application(initialState, {
        type: 'RECEIVE_APPLICATION',
        json: {
            data: {
                applicationForm: {a: 'b', isFirstHackathon: 0}
            }
        }
    });
    assert.equal(newState.loading,false);
    assert.deepEqual(newState.applicationForm,{ a: 'b', isFirstHackathon: false });
});


it('handles START_RESUME_UPLOAD', ()=>{
    const newState = reducer_application(initialState, {
        type: 'START_RESUME_UPLOAD',
        fileName: 'resume.pdf'
    });
    assert(newState.isResumeUploading);
    assert.equal(newState.uploadProgress,0);
    assert.equal(newState.uploadingFileName,'resume.pdf');
    assert.equal(newState.applicationForm.resume_filename,null);
});
it('handles FINISH_RESUME_UPLOAD', ()=>{
    const newState = reducer_application(initialState, {
        type: 'FINISH_RESUME_UPLOAD',
        fileName: 'resume.pdf'
    });
    assert.isFalse(newState.isResumeUploading);
    assert.equal(newState.uploadProgress,100);
    // assert.equal(newState.uploadingFileName,'resume.pdf');
    assert.equal(newState.applicationForm.resume_filename,'resume.pdf');
});

it('handles START_RESUME_UPLOAD and FINISH_RESUME_UPLOAD', ()=>{
    const newState = reducer_application(initialState, {
        type: 'START_RESUME_UPLOAD',
        fileName: 'resume.pdf'
    });
    const newState2 = reducer_application(newState, {
        type: 'FINISH_RESUME_UPLOAD',
        fileName: 'resume.pdf'
    });
    assert.isFalse(newState2.isResumeUploading);
    assert.equal(newState2.uploadProgress,100);
    assert.equal(newState2.uploadingFileName,'resume.pdf');
    assert.equal(newState2.applicationForm.resume_filename,'resume.pdf');
});

it('handles RESUME_UPLOAD_PROGRESS', ()=>{
    const newState = reducer_application(initialState, {
        type: 'RESUME_UPLOAD_PROGRESS',
        progress: 4
    });
    assert.equal(newState.uploadProgress,4);
});

it('handles CHANGE_APPLICATION_FIELD_VALUE', ()=>{
    let pre = {
        ...initialState,
        applicationForm: {
            'field1': 'blah'
        }
    };
    assert.equal(pre.applicationForm.field1,'blah');
    const newState = reducer_application(pre, {
        type: 'CHANGE_APPLICATION_FIELD_VALUE',
        field: 'field1',
        value: 'hello'
    });
    assert.equal(newState.applicationForm.field1,'hello');
});

it('handles TOGGLE_APPLICATION_FIELD_VALUE', ()=>{
    let pre = {
        ...initialState,
        applicationForm: {
            'has_no_github': 0
        }
    };
    assert.equal(pre.applicationForm.has_no_github,0);
    const newState = reducer_application(pre, {
        type: 'TOGGLE_APPLICATION_FIELD_VALUE',
        field: 'has_no_github',
    });
    assert.equal(newState.applicationForm.has_no_github,true);
});