import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
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
);

const LoginForm = (props) => {
    const { error, handleSubmit, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className="form">
            <h1>Login</h1>
            <Field name="email" type="email" component={renderField} label="Email" className="topSpacing" />
            <br />
            <Field name="password" type="password" component={renderField} label="Password" className="topSpacing" />
            {error && <strong>{error}</strong>}
            <div>
                <button type="submit" disabled={submitting}  className="topSpacing btn">Login</button>
            </div>
            <br/>
            <Link to="/register">Need an account?</Link>
            <br/>
            <Link to="/reset">Forgot your password?</Link>
            <br/>
            <GithubLoginButton />
        </form>
    );
}

export default reduxForm({
    form: 'Login'  // a unique identifier for this form
})(LoginForm)
