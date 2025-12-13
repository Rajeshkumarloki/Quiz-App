import React, { createContext, useState } from 'react';
import Storage from './Storage.json';
import Router from './Router';

export let MyContext = createContext();

const Context = () => {
    let [data, setData] = useState(Storage);
    let [index, setIndex] = useState(0);

    return (
        <div>
            <MyContext.Provider value={[data, setData, index, setIndex]}>
                <Router></Router>
            </MyContext.Provider>
        </div>
    );
};

export default Context;