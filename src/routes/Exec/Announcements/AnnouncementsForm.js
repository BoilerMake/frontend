import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>

    <div>
      <label>{label}</label><input {...input} placeholder={label} type={type} className='AnnouncementsFormText' />
      {touched && error && <span className='AnnouncementsFormError'>{error}</span>}
    </div>
  </div>
);

let AnnouncementsForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting, valid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='message' component={renderField} type='text' className='AnnouncementsFormText' label='message' />
      </div>
      <div>
        <Field name='slack' component={renderField} type='checkbox' class='AnnouncementsFormText' label='Send slack?' />
      </div>
      <div>
        <Field name='email' component={renderField} type='checkbox' class='AnnouncementsFormText' label='Send email?' />
      </div>
      <div>
        <Field name='sms' component={renderField} type='checkbox' class='AnnouncementsFormText' label='Send SMS?' />
      </div>
      <div>
        <Field name='important' component={renderField} type='checkbox' class='AnnouncementsFormText' label='important?' />
      </div>
      <p>
        {error && <strong>{error}</strong>}
      </p>
      <button className='button-secondary' type='submit' disabled={pristine || submitting}>Submit</button>
      <button className='button-secondary' type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</button>
    </form>
  );
};

// // Decorate the form component
AnnouncementsForm = reduxForm({
  form: 'announcements' // a unique name for this form
})(AnnouncementsForm);

export default AnnouncementsForm;
