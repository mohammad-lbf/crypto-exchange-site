import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../shared/HeaderLogo';

const Header = () => {
    return (
        <div style={{position:"fixed" , top:"0" , right:"0" , zIndex:"20"}} className="text-center w-100 bg-white shadow-sm">
            <div
        className="d-flex flex-row-reverse container bg-white py-3 py-lg-4 align-items-center justify-content-between">
            <button className="bg-white border-0 p-0 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#HambergurMenuOffcanvas">
                <i style={{color:"#3f5aef"}} className="d-lg-none border-0 bi bi-list fs-2 p-0"></i>
            </button>
            <div className="d-flex flex-row-reverse align-items-center">
                <HeaderLogo />
                <div className="d-none d-lg-flex flex-row-reverse me-5 align-items-center">
                    <Link to="/" className=" text-decoration-none mb-0 mx-2 fw-200 header-navbar-links">صفحه اصلی</Link>
                    <Link to="/all-cryptoes"  className=" text-decoration-none mb-0 mx-2 fw-200 header-navbar-links">لیست همه ی ارز ها</Link>
                    <Link to="/about-us" className="text-decoration-none mb-0 mx-2 fw-200 header-navbar-links">درباره ما</Link>
                    <Link to="/about-project">
                    <button className="text-decoration-none bg-main-2 text-white fs-14 px-4 py-2 me-2 rounded-pill" data-bs-dismiss="offcanvas">
                        درباره پروژه
                </button>
                    </Link>
                </div>
            </div>
            <button className="bg-white border-0 p-0 d-lg-none" type="button" data-bs-toggle="modal" data-bs-target="#AccountModal">
                <i style={{color:"#3f5aef"}} className="d-lg-none border-0 bi bi-person fs-2 p-0"></i>
            </button>

            <div className="d-none d-lg-flex">
                <button className="d-none d-md-block bg-main-2 text-white fs-14 px-4 py-3 rounded-pill" data-bs-toggle="modal" data-bs-target="#AccountModal">
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
        </div>
    );
};

export default Header;