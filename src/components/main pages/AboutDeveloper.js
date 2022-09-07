import React , {useEffect} from 'react';

const AboutDeveloper = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    } , [])
    return (
        <div style={{marginTop:"85px"}} className="pt-3 pt-lg-5">
        <div className="container rounded">
        <div>
            <p className="lh-lg text-end text-end fs-13">
            : مشخصات طراح و توسعه دهنده پروژه
            <br />
            <br />
            نام و نام خانوادگی : محمد لبافی
            <br />
            <br />
            : مهارت ها
            <br />
            </p>
            <p className="lh-lg mt-2 text-start fs-13 fs-sm-15 ">
            HTML & CSS
                <br/>
                Java Script (ES 6)
                <br />
                bootstrap 5
                <br />
                SASS
                <br />
                Git & Git hub
                <br />
                React js (React hooks & functional)
                <br/>
                react router dom (SPA site)
                <br />
                Redux
                <br />
                GraphQL
                <br />
                responsive design
                <br />
                material UI
                <br />
            </p>
        </div>
        </div>
    </div>
    );
};

export default AboutDeveloper;