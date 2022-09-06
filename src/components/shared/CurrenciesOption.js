import React from 'react';

const CurrenciesOption = ({name , symbol , image , current_price , market_Cap , price_change }) => {
    return (
        <div>
            <div className="d-flex flex-column d-lg-none bg-white rounded p-2 border my-2">
                <div>
                    <div className="d-flex align-items-center justify-content-center mb-2">
                    <img style={{width:"40px"}} src={image} />
                    <p className="mb-0 fs-15 ms-2">{name}-{symbol.toUpperCase()}</p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <p className="fs-13">{current_price}: قیمت فروش</p>
                        <p className="fs-13">{market_Cap}: ارزش بازار</p>
                        <p className={`fs-13 ${price_change > 0 ? "text-success" : "text-danger"}`}>{price_change}: تغییرات روزانه</p>
                        <button className="bg-main-2 text-white fs-14 px-4 py-2 rounded-pill fs-13">
                            معامله
                        </button>
                    </div>
                </div>
            </div>
            <div className="d-none justify-content-between d-lg-flex flex-row-reverse align-items-center bg-white my-2 shadow-sm p-2 rounded" >
                <div className="d-flex align-items-center">
                    <p style={{width:"150px"}} className="mb-2  fs-15 mb-lg-0">{name}-{symbol.toUpperCase()}</p>
                    <img className="rounded-circle text-start" style={{width:"50px" , height: "50px"}} src={image} alt="image" />
                </div>
                    <div className="d-flex flex-row-reverse align-items-center">
                    <p style={{width:"150px"}} className="mb-0 text-center  fs-15">{current_price.toLocaleString()}$</p>
                    <p style={{width:"150px"}} className={`mb-0 text-center fs-15  ${price_change > 0 ? "text-success" : "text-danger"}`}>{price_change}</p>
                    <p style={{width:"150px"}} className="mb-0  text-center fs-15">{market_Cap.toLocaleString()}</p>
                    <div style={{width:"150px"}}>
                    <button className="bg-main-2 mb-2 me-2 text-white fs-14 px-4 py-2 rounded-pill fs-13">
                            معامله
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrenciesOption;