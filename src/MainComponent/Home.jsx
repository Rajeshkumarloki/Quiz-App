import React from "react";
import "./Home.css";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <nav>
                <div>
                    <Link to="/">
                        <h1>QUIZ APP</h1>
                    </Link>
                </div>

                <div>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>

                    <Link to="/signup">
                        <button>Sign Up</button>
                    </Link>
                </div>
            </nav>


            <Outlet />
        </div>
    );
};

export default Home;
