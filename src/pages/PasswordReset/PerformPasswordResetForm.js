import React from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../assets/_form.scss'

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
    const { error, handleSubmit, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className="form">
            <Field name="password" type="password" component={renderField} label="password"/>
            <Field name="password2" type="password" component={renderField} label="confirm"/>
            {error && <strong>{error}</strong>}
            <div>
                <button type="submit" disabled={submitting}>Submit</button>            
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'PerformPasswordResetForm'  // a unique identifier for this form
})(PerformPasswordResetForm)
