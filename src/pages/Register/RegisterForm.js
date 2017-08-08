import React from 'react'
import { Field, reduxForm } from 'redux-form'
import GithubLoginButton from '../../components/GithubLoginButton'
import { Link } from 'react-router-dom'
import '../../assets/_form.scss'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
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
          <GithubLoginButton className="topSpacing" actionText="Register"/>
          <div className="back-line"><span>Or with email</span></div>
          <Field name="email" type="email" className="topSpacing" component={renderField} label="Email"/>
          <Field name="password" type="password" className="topSpacing" component={renderField} label="Password"/>
          {error && <div className="margint">{error}</div>}
          <button className="btn topSpacing" type="submit" disabled={submitting}>Register</button>
          <div className="flex margint h-center">
              <div>Already Have an account? <Link to="/login">Login here</Link></div>
          </div>
        </form>
    )
}

export default reduxForm({
    form: 'Register'  // a unique identifier for this form
})(RegisterForm)
