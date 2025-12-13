import React from 'react';
import "./Login.css";
const Login = () => {
    return (
        <div className="login">
            <form action="">
                <h1>Login</h1>
                <input type="email" placeholder="Enter the email" />
                <input type="password" placeholder="Enter the password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
