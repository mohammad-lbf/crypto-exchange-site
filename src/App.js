import React from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import HomePage from './components/main pages/HomePage';
import AccountModal from './components/modals/AccountModal';
import HambergurMenuOffcanvas from './components/shared/HambergurMenuOffcanvas';
import { Routes , Route, Router } from 'react-router-dom';
import AllCryptoes from './components/main pages/AllCryptoes';
import AboutDeveloper from './components/main pages/AboutDeveloper';
import AboutProject from './components/main pages/AboutProject';
const App = () => {
    return (
        <div style={{minHeight:"100vh"}} 
        className="">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/*" element={<HomePage />} />
                <Route path="/all-cryptoes" element={<AllCryptoes />} />
                <Route path="/about-us" element={<AboutDeveloper />} />
                <Route path="/about-project" element={<AboutProject />} />
            </Routes>
            <HambergurMenuOffcanvas />
            <AccountModal />
            <Footer />
        </div>
    );
};

export default App;