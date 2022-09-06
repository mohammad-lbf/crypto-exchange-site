import React , {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { getApi } from '../../services/api';
import CurrenciesOption from './CurrenciesOption';
import Loader from './Loader';

const HomePageCurrenciesMenu = () => {
    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState("");
    useEffect(()=>{

        const fetchApi =async ()=>{
            const data = await getApi();
            setCoins(data);
        }
        fetchApi();
    },[]);
    const searchHandler = (event)=>{
        setSearch(event.target.value)
    }

    const searchedItems = coins.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="bg-light rounded container my-3 p-4 py-2">
            <div className="d-flex justify-content-center justify-content-lg-end mt-2 mb-2 mb-lg-4 align-items-center">
            {/* <input value={search} onChange={searchHandler} style={{width:"300px" , outline:"none"}} className="border rounded p-2 text-end" type="text" placeholder="جستجوی ارز"/> */}
            <p className="text-end mb-lg-0 text-main-2 fs-4 fw-bold">:آخرین قیمت ارز های دیجیتال</p>
            </div>
            <div className="d-none d-lg-flex justify-content-between flex-row-reverse">
                <div className="pt-2" style={{width:"200px"}}>
                    <p className="mb-0 text-end pe-3">رمز ارز</p>
                </div>
                <div className="d-flex flex-row-reverse align-items-center mb-3">
                <p style={{width:"150px"}} className="mb-0  fs-15 text-center">قیمت فروش</p>
                    <p style={{width:"150px"}} className={`mb-0 fs-15 text-center`}>تغییرات روزانه</p>
                    <p style={{width:"150px"}} className="mb-0 text-center fs-15">ارزش بازار</p>
                    <div style={{width:"150px"}}>
                    <button className="bb-light text-main-2 ms-2 fs-14 px-4 py-2 rounded-pill fs-13">
                            معامله
                    </button>
                    </div>
                </div>
            </div>
            <div>
            {
                    !coins.length &&
                    <Loader />
                }
                {
                    
                    <div className="container bg-light px-0 coin-container">
                    {coins.splice(0 , 6).map(item => <CurrenciesOption key={item.id} 
                    name={item.name} symbol={item.symbol} 
                    image={item.image} current_price={item.current_price}
                    market_Cap={item.market_cap} price_change={item.price_change_percentage_24h}
                    />)
                    }
                </div>
                }
            </div>
            <div className="text-center mt-4 mb-3">
                <Link to="/" className="text-decoration-none text-main-2 w-100 text-center">
                    <i className="bi bi-chevron-left"></i>
                    مشاهده همه ارز ها
                </Link>
            </div>
        </div>
    );
};

export default HomePageCurrenciesMenu;