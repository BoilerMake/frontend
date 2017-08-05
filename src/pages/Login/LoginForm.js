import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import GithubLoginButton from '../../components/GithubLoginButton'

import '../../assets/_form.scss'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
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
            <h1 className="title text-center">Login</h1>
            <div className="marginb">
              <GithubLoginButton />
            </div>
            <div className="white margint back-line"><span>Login with email</span></div>
            <Field name="email" type="email" component={renderField} label="Email" className="topSpacing" placeholder="Email"/>
            <Field name="password" type="password" component={renderField} label="Password" className="topSpacing" />
            {error && <div className="margint">{error}</div>}
            <div>
                <button type="submit" disabled={submitting}  className="topSpacing btn">Login</button>
            </div>
            <div className="flex margint h-center">
              <div className="">
                <Link to="/register">Register</Link>
              </div>
              <div className="marginl">
                <Link to="/reset">Forgot your password?</Link>
              </div>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'Login'  // a unique identifier for this form
})(LoginForm)
