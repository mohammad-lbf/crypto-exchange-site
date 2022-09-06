import React from 'react';
import BitcoinImg2 from '../../assets/images/cryptocurrency-wallet-4307584-3581353.webp'
const HomePageNav2 = () => {
    return (
        <div className="container">
            <div className="row align-items-center flex-column-reverse flex-lg-row">
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src={BitcoinImg2} />
                </div>
                <div className="col-12 col-lg-6">
                <div className="d-flex align-items-center align-items-lg-end flex-column">
              <div className="d-flex justify-content-center mt-5">
                  <p className="fw-bold fs-2 me-2 text-main-2">ارز های دیجیتال</p>
                  <p className="fw-bold fs-2 text-main-1">خرید و فروش</p>
              </div> 
              <p className="fs-13 text-center">بدون واسطه و بدون کارمزد اضافی در سرتاسر جهان ارزهای بیت کوین ، اتریوم ، تتر و ... با قیمت مناسب بخرید و بفروشید</p> 
            </div>
             </div>
            </div>
        </div>
    );
};

export default HomePageNav2;