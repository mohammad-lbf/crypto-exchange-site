import React from 'react';

const Loader = () => {
    return (
        <div>
            <div class="spinner-grow text-main-2" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p>...در حال بارگذاری</p>
        </div>
    );
};

export default Loader;