import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/actionCreators';

function Login(props) {
    const onLogin = (e) => {
        e.preventDefault();

        const username = e.target['username'];
        const password = e.target['password'];
        const credentials = {
            username: username.value,
            password: password.value
        };

        username.value &&
        password.value &&
        props.login(credentials)
            .then(() => {
                props.history.push('/');
            })
    }

    return (
        <div>
            <form onSubmit={onLogin}>
                <input name="username" value="Lambda School" placeholder="Username" readOnly />
                <input type="password" value="i<3Lambd4" name="password" placeholder="Password" readOnly />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default connect(
    null,
    { login }
  )(Login);