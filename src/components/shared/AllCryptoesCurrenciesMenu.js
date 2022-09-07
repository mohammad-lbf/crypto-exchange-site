import React , {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { getApi } from '../../services/api';
import CurrenciesOption from './CurrenciesOption';
import Loader from './Loader';

const AllCryptoesCurrenciesMenu = () => {

    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState("");

    useEffect(()=>{
        scrollTop();
        const fetchApi =async ()=>{
            const data = await getApi();
            setCoins(data);
        }
        fetchApi();
    },[]);

    const scrollTop = ()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    }    
    const searchHandler = (event)=>{
        setSearch(event.target.value)
    }
    const searchedItems = coins.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="bg-light rounded container p-4 py-2">
            <div className="d-flex flex-column flex-lg-row-reverse justify-content-center justify-content-lg-between mt-2 mb-5 align-items-center">
            <p className="text-end mb-lg-0 text-main-2 fs-4 fw-bold">: لیست تمامی ارز های دیجیتال</p>
            <input value={search} onChange={searchHandler} style={{width:"300px" , outline:"none"}} className="border rounded p-2 text-end" type="text" placeholder="جستجوی ارز"/>
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
                    
                    <div className="container bg-light px-0 coin-container pb-2">
                    {searchedItems && searchedItems.map(item => <CurrenciesOption key={item.id} 
                    name={item.name} symbol={item.symbol} 
                    image={item.image} current_price={item.current_price}
                    market_Cap={item.market_cap} price_change={item.price_change_percentage_24h}
                    />)
                    }
                    {
                       searchedItems.length == 0 && coins.length &&
                       <div className="text-center w-100 my-5 text-danger fw-bold"> 
                           ارز دیجیتالی با نام ورودی شما یافت نشد
                       </div>
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default AllCryptoesCurrenciesMenu ;