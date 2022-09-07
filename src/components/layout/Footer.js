import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    const Footer = styled.div`
    border-top :1px solid #3F5AEF;
    background-color: #080620;
    z-index:15;
    a{
        border-bottom:2px solid #080620;
        transition: all 0.3s;
        &:hover{
            border-bottom:2px solid #3F5AEF;
            transform:translateX(5px);
        }   
    }
    .footer-logo{
        border-bottom:2px solid #3F5AEF;
    } 
    `
    return (
        <div className="d-flex flex-column align-items-center w-100 bg-main-4">
                <Footer className=" py-3 px-lg-4 d-flex flex-column w-100 flex-lg-row align-items-center justify-content-sm-between align-items-center">
            <div className="d-flex flex-column align-items-center mb-3 mb-lg-0">
            <Link to="/" className="fs-1 fw-bold text-decoration-none footer-logo mb-2">
            <span className="text-main-2">LBF</span>
            <span className="text-white">Exchange</span>
            </Link>
            <p style={{fontSize:"15px"}} className="text-light mb-1">محمد لبافی</p>
            <p style={{fontSize:"15px"}} className="footer-logo text-light pb-1">برنامه نویس فرانت اند</p>
            </div>
            <div className="d-flex flex-column align-items-center align-items-lg-end footer-logo mb-5 mb-lg-0">
                <Link className="fs-15 text-decoration-none text-white my-2" to="/">صفحه اصلی</Link>
                <Link className="fs-15 text-decoration-none text-white my-2" to="/weblog">لیست همه ی ارز ها</Link>
                <Link className="fs-15 text-decoration-none bg-main-2 text-white my-2 px-2 py-1 border-0 rounded" to="/aboutproject">درباره پروژه</Link>
                <Link className="fs-15 text-decoration-none text-white my-2" to="/aboutdeveloper">درباره ما</Link>
            </div>
            <div className="d-flex flex-column align-items-center">
            <p style={{fontSize:"15px"}} className="fw-bold text-white">ما را در فضای مجازی دنبال کنید</p>
            <div className="d-flex align-items-center">
                <div style={{width:"50px" , height:"50px"}} className="rounded-circle mx-2 d-flex justify-content-center bg-main-2 align-items-center text-white">
                <i className="bi bi-instagram"></i>
                </div>
                <div style={{width:"50px" , height:"50px"}} className="rounded-circle mx-2 d-flex justify-content-center bg-main-2 align-items-center text-white">
                <i className="bi bi-telegram"></i>
                </div>
                <div style={{width:"50px" , height:"50px"}} className="rounded-circle mx-2 d-flex justify-content-center bg-main-2 align-items-center text-white">
                <i className="bi bi-twitter"></i>
                </div>
            </div>
            </div>
        </Footer>
        <div style={{backgroundColor: "#080620" }} className=" text-white text-center py-3 fs-15 w-100">
            محفوظ است LBFExchange تمامی حقوق برای
            <p style={{fontSize:"13px"}} className="mt-2 mb-1 text-main-3">محمد لبافی - 1401</p>
        </div>
        </div>
        
    );
};

export default Footer;