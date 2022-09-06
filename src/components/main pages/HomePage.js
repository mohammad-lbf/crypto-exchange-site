import React from 'react';
import HomePageCurrenciesMenu from '../shared/HomePageCurrenciesMenu';
import HomePageNav1 from '../shared/HomePageNav1';
import HomePageNav2 from '../shared/HomePageNav2';
import HomePageNav3 from '../shared/HomePageNav3';

const HomePage = () => {
    return (
        <div>
            <nav>
                <HomePageNav1 />
                <HomePageCurrenciesMenu />
                <HomePageNav2 />
                <HomePageNav3 />
            </nav>
        </div>
    );
};

export default HomePage;