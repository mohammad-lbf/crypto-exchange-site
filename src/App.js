import React from 'react';
import Header from './components/layout/Header';
import HomePage from './components/main pages/HomePage';

const App = () => {
    return (
        <div style={{minHeight:"100vh"}} 
        className="">
            <Header />
            <HomePage />
        </div>
    );
};

export default App;