import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        {/*<label>{label}</label>*/}
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

export const PerformPasswordResetForm = (props) => {
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="password" type="password" component={renderField} label="password"/>
            <Field name="password2" type="password" component={renderField} label="confirm"/>
            {error && <strong>{error}</strong>}
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'PerformPasswordResetForm'  // a unique identifier for this form
})(PerformPasswordResetForm)