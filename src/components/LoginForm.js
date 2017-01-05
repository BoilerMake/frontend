import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className='LoginFormText' />
      {touched && error && <span className='LoginFormError'>{error}</span>}
    </div>
  </div>
);

let LoginForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting, valid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='email' component={renderField} type='text' className='LoginFormText' label='email' />
      </div>
      <div>
        <Field name='password' component={renderField} type='password' class='LoginFormText' label='password' />
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
LoginForm = reduxForm({
  form: 'songrequest' // a unique name for this form
})(LoginForm);

export default LoginForm;
// export default reduxForm({
//   form: 'songrequest',
//   validate
// })(LoginForm)
