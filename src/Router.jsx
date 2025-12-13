import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./MainComponent/Home";
import Login from './MainComponent/Login';
import Signup from './MainComponent/Signup';
import Result from "./QuizComponent/Result";
import Quiz from "./QuizComponent/Quiz";
import Welcome from './MainComponent/Welcome.jsx';

let router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            { index: true, element: <Welcome />, },
            { path: "signup", element: <Signup></Signup>, },
            { path: "login", element: <Login></Login>, },
        ],
    },
    { path: "/quiz", element: <Quiz></Quiz>, },
    { path: "result", element: <Result></Result>, },
]);

const Router = () => {
    return (
        <div>
            {/* <RouterProvider router={router}> */}
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;
