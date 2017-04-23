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

export const RequestPasswordResetForm = (props) => {
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" type="email" component={renderField} label="email"/>
            {error && <strong>{error}</strong>}
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'RequestPasswordResetForm'  // a unique identifier for this form
})(RequestPasswordResetForm)