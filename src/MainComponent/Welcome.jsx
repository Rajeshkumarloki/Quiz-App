import React from 'react';
import "./Welcome.css";
import { Link } from 'react-router-dom';
const Welcome = () => {
    return (
        <div className="welcome">
            <section>
                <h1>Welcome to the Quiz App</h1>
                <Link to="quiz">
                    <button>Start Quiz</button>
                </Link>
            </section>
        </div>
    );
};

export default Welcome;
