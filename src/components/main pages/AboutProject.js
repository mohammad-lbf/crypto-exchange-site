import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
const AboutProject = () => {
    useEffect(()=>{
        scrollTop()
    } , [])
        const scrollTop = ()=>{
            window.scrollTo({
                top:-100,
                left:-100,
                behavior:'smooth'
            })
        }
    return (
        <div style={{marginTop:"85px"}} className="pt-3 pt-lg-5">
            <div className=" container">
                <div className="text-main-2 d-flex align-items-center flex-row-reverse fs-4 w-100 border border-top-0 border-start-0 border-end-0 border-light justify-content-start pb-2">
                <i className="bi bi-info-circle mt-1 ms-1"></i>
                <p className="mb-0">:درباره پروژه</p>
                </div>
                <div className="text-end mt-3 border-bottom">
                    <p className="fs-13 fs-sm-15"><span className="fw-bold"><span className="text-main-2 me-1">LBF</span>Exchange</span> نام پروژه: سایت صرافی آنلاین ارز دیجیتال</p>
                    <div className="border-bottom pb-3 fs-13">
                    <p className="mb-3">طراح و توسعه دهنده: محمد لبافی</p>
                    <Link to="/about-us" className="bg-main-2 text-decoration-none text-light rounded-pill py-1 px-3 fs-13">درباره توسعه دهنده</Link>
                    </div>
                    <p className="mb-2 pt-2">:شرح پروژه</p>
                    <p style={{direction:"rtl"}} className="fw-200 text-end lh-lg mb-2 fs-13 fs-sm-15">پروژه حاضر، یک سایت صرافی آنلاین ارز دیجیتال می‌باشد که به صورت آنلاین، قیمت ارز های دیجیتال را در اختیار شما قرار می‌دهد.
          برای گرفتن اطلاعات ارز های دیجیتال از coingecko استفاده شده و فرانت اند با استفاده از React js توسعه داده شده است </p>
                </div>
                <div className="text-end py-2">
                    <p>: تکنولوژی های مورد استفاده در این پروژه</p>
                    <p className="lh-2 text-start fs-13 fs-sm-15">
                    HTML & CSS
                    <br/>
                    Java Script
                    <br />
                    bootstrap 5
                    <br />
                    Git & Git hub
                    <br />
                    React js
                    <br/>
                    Rest Api
                    <br />
                    coingecko
                    <br />
                    react router dom (SPA site)
                    <br />
                    React hooks
                    <br />
                    styled components
                    <br />
                    responsive design
                </p>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;