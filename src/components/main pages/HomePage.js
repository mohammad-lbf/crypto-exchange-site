import React , {useEffect} from 'react';
import HomePageCurrenciesMenu from '../shared/HomePageCurrenciesMenu';
import HomePageNav1 from '../shared/HomePageNav1';
import HomePageNav2 from '../shared/HomePageNav2';
import HomePageNav3 from '../shared/HomePageNav3';

const HomePage = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    } , [])
    return (
        <div style={{marginTop:"95px"}} className="">
            <nav>
                <HomePageNav1 />
                <HomePageCurrenciesMenu />
                <HomePageNav3 />
                <HomePageNav2 />
            </nav>
        </div>
    );
};

export default HomePage;