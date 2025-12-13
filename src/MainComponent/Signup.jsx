import React, { useState } from 'react'
import "./Signup.css"

const Signup = () => {
    const [signupState, setSignup] = useState({
        name: "",
        email: "",
        password: "",
        quiz: null,
    });

    function handleInput(e) {
        setSignup({ ...signupState, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch(
            "https://690ed2b0bd0fefc30a05942c.mockapi.io/api/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signupState),
            }
        );
        const userResult = await res.json();

        setSignup({
            name: "",
            email: "",
            password: "",
            quiz: null,
        });


        console.log(userResult);
    }

    return (
        <div className='Signup'>
            <form onSubmit={handleSubmit}>
                <h1>Signup or Register New Account</h1>
                <input
                    type="text"
                    placeholder='Enter The Username'
                    name="name"
                    onChange={handleInput}
                    value={signupState.name}
                />
                <input
                    type="text"
                    placeholder='Enter The Email'
                    name="email"
                    onChange={handleInput}
                    value={signupState.email}
                />
                <input
                    type="password"
                    placeholder='Enter The Password'
                    name="password"
                    onChange={handleInput}
                    value={signupState.password}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Signup;
