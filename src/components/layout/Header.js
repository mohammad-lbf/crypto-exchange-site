import React from 'react';
import HeaderLogo from '../shared/HeaderLogo';

const Header = () => {
    return (
        <div className="d-flex flex-row-reverse container py-3 py-lg-4 align-items-center justify-content-between">
            <i className="d-lg-none bi bi-list fs-2 text-main-2"></i>
            <div className="d-flex flex-row-reverse align-items-center">
                <HeaderLogo />
                <div className="d-none d-lg-flex flex-row-reverse me-5 align-items-center">
                    <p className="mb-0 mx-2 text-main-2 header-navbar-links">صفحه اصلی</p>
                    <p className="mb-0 mx-2 fw-200 header-navbar-links">وبلاگ</p>
                    <p className="mb-0 mx-2 fw-200 header-navbar-links">درباره ما</p>
                </div>
            </div>
            <i className="d-md-none bi bi-person-circle fs-2 text-main-2"></i>

            <div className="d-none d-lg-flex">
                <button className="d-none d-md-block bg-main-2 text-white fs-14 px-4 py-3 rounded-pill">
                    حساب کاربری
                </button>
                <button className="btn btn-white border-0 ms-3 ms-lg-4 p-0">
                    <div className="align-items-center d-flex border-bottom-main-2-3">
                    <span className="mb-2 fs-14">پشتیبانی</span>
                    <i className="bi bi-headset fs-5 ms-2"></i>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Header;