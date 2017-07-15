import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

let AccountForm = (props) => {
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" type="email" component={renderField} label="email"/>
            <Field name="first_name" type="text" component={renderField} label="First Name"/>
            <Field name="last_name" type="text" component={renderField} label="Last Name"/>
            {error && <strong>{error}</strong>}
            <div>
                <button type="submit" disabled={submitting}>Update</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    );
};

AccountForm = reduxForm({
    form: 'Account'
})(AccountForm);

AccountForm = connect(
    state => ({
        initialValues: state.user.me // pull initial values from account reducer
    }),
    // { load: loadAccount }               // bind account loading action creator
)(AccountForm);
export default AccountForm;
