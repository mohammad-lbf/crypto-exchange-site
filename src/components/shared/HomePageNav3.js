import React from 'react';
import BitcoinImg3 from '../../assets/images/wallet-4521221-3754834.webp'
const HomePageNav3 = () => {
    return (
        <div className="w-100 bg-main-4">
            <div className="container ">
            <div className="d-flex align-items-center flex-column">
              <div className="d-flex flex-column align-items-center mt-5">
                  <p className="fw-bold fs-2 me-2 text-white">حساب اینترنتی مطمئن برای</p>
                  <p className="fw-bold fs-2 text-main-2">نگهداری دارایی شما</p>
                  <button className="bg-main-2 text-white ms-2 fs-14 px-4 py-2 rounded-pill fs-13 mb-4 mt-2">
                            ساخت کیف پول
                    </button>
              </div> 
              <p className="fs-13 text-center text-white">بدون واسطه و بدون کارمزد اضافی در سرتاسر جهان ارزهای بیت کوین ، اتریوم ، تتر و ... با قیمت مناسب بخرید و بفروشید</p> 
            <img className="img-fluid" src={BitcoinImg3} />
            </div>
        </div>
        </div>
    );
};

export default HomePageNav3;