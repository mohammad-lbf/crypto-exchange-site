import React from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import HomePage from './components/main pages/HomePage';
import AccountModal from './components/modals/AccountModal';
import HambergurMenuOffcanvas from './components/shared/HambergurMenuOffcanvas';

const App = () => {
    return (
        <div style={{minHeight:"100vh"}} 
        className="">
            <Header />
            <HomePage />
            <HambergurMenuOffcanvas />
            <AccountModal />
            <Footer />
        </div>
    );
};

export default App;