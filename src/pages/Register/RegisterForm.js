import React from 'react'
import { Field, reduxForm } from 'redux-form'
import GithubLoginButton from '../../components/GithubLoginButton'
import '../../assets/_form.scss'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

export const RegisterForm = (props) => {
    const { error, handleSubmit, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className="form">
          <h1>Register</h1>
          <Field name="email" type="email" component={renderField} label="Email"/>
          <br/>
          <Field name="password" type="password" component={renderField} label="Password"/>
          {error && <strong>{error}</strong>}
          <button className="btn topSpacing" type="submit" disabled={submitting}>Register</button>
          <br/><br/>
          <GithubLoginButton className="topSpacing"  />
        </form>
    )
}

export default reduxForm({
    form: 'Register'  // a unique identifier for this form
})(RegisterForm)
