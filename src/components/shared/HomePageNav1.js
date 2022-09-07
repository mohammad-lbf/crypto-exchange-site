import React from 'react';
import Bitcoin1 from '../../assets/images/bitcoin-4867136-4061619.webp'
const HomePageNav1 = () => {
    return (
        <div className="container mt-2 pt-3 pb-3">
            <div className="row flex-row-reverse align-items-center justify-content-between">
                <div className="col-12 col-lg-5 text-center text-lg-end">
                    <p className="mb-0 fw-bold fs-1">سامانه معاملات آنلاین</p>
                    <div className="d-flex justify-content-center justify-content-lg-end ">
                    <p className="text-main-3 fw-bold fs-1">.</p>
                    <p className="text-main-2 fw-bold fs-1">ارز های دیجیتال</p>
                    </div>
                    <p className="mb-0 text-secondary fs-13">با ما خرید و فروش ارزهای دیجیتال را در محیطی امن و حرفه‌ای تجربه کنید</p>
                    <div className="border rounded-pill d-flex align-items-center justify-content-between mt-5 mt-lg-4 p-1">
                        <button className="bg-main-2 text-white fs-14 px-4 py-3 rounded-pill fs-13">
                    شروع کن
                </button>
                        <input type="text" style={{outline:"none"}} className="border-0 text-end pe-2 w-50 fs-13" placeholder="ایمیل یا شماره موبایل" />
                    </div>
                    <p className="mb-0 text-main-2 fs-13 lh-lg mt-4">در بازار معاملاتی حامی پرداخت بدون واسطه و محدودیت، تمامی ارزهای دیجیتال را با بهترین قیمت جهانی و کمترین کارمزد در بازارهای تومان و تتر آنلاین خرید و فروش کنید</p>
                    <div className="d-flex justify-content-center justify-content-lg-end mt-3 mt-lg-5">
                        <p className="mb-0 text-secondary lh-lg me-4" style={{fontSize:"11px"}}>تنوع ارزی بالا</p>
                        <p className="mb-0 text-secondary lh-lg mx-4" style={{fontSize:"11px"}}>احراز هویت سریع</p>
                        <p className="mb-0 text-secondary lh-lg ms-4" style={{fontSize:"11px"}}>پشتیبانی شبانه روزی</p>
                    </div>
                </div>
                <div className="col-12 col-lg-6 text-center mt-3 mt-lg-0">
                    <img width="300px" src={Bitcoin1}/>
                </div>
            </div>
        </div>
    );
};

export default HomePageNav1;