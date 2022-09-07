import React from 'react';
import AllCryptoesCurrenciesMenu from '../shared/AllCryptoesCurrenciesMenu';

const AllCryptoes = () => {
    return (
        <div style={{minHeight:"80vh" , marginTop:"105px"}} className="pt-lg-4 pb-4 ">
            <AllCryptoesCurrenciesMenu />
        </div>
    );
};

export default AllCryptoes;