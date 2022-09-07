import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';

const HambergurMenuOffcanvas = () => {
    return (
<div >
    <div style={{width:'300px'}} className="offcanvas offcanvas-end" tabIndex="-1" id="HambergurMenuOffcanvas" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <HeaderLogo />
      </div>
      <div className="offcanvas-body">
        <div className="d-flex flex-column align-items-end">
        <Link to="/" className="text-decoration-none mb-4 mx-0 text-main-2 fw-200 header-navbar-links" >صفحه اصلی</Link>
        <Link to="/all-cryptoes" className="text-decoration-none mb-4 mx-0 fw-200 header-navbar-links" >لیست همه ی ارز ها</Link>
        <Link to="/about-us" className="text-decoration-none mb-4 mx-0 fw-200 header-navbar-links" >درباره ما</Link>
        <div className="d-flex align-items-center justify-content-between w-100">
        <button className="btn btn-white border-0 ms-3 ms-lg-4 p-0">
                    <div className="align-items-center d-flex border-bottom-main-2-3">
                    <span className="mb-2 fs-14">پشتیبانی</span>
                    <i className="bi bi-headset fs-5 ms-2"></i>
                    </div>
        </button>
                <Link to="/about-project">
                    <button className=" bg-main-2 text-white fs-14 px-4 py-2 mt-4 mb-3 rounded-pill">
                        درباره پروژه
                    </button>
                </Link>
        </div>
        <div className="d-flex flex-column align-items-center w-100 border p-2 mt-3">
            <p className="fs-13">:طراح و توسعه دهنده پروژه</p>
            <p className="fs-13">محمد لبافی</p>
            <Link to="/about-us" className="bg-main-2 text-white px-4 py-2 rounded-pill text-decoration-none fs-15">
                <p className="fs-13 mb-0">درباره توسعه دهنده</p>
            </Link>
        </div>
        </div>
      </div>
</div>
        </div>
    );
};

export default HambergurMenuOffcanvas;