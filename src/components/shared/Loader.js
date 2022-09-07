import React from 'react';

const Loader = () => {
    return (
        <div className="d-flex align-items-center flex-column">
            <div className="spinner-grow text-main-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">...در حال بارگذاری</p>
        </div>
    );
};

export default Loader;