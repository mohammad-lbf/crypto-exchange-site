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
        <div style={{minHeight:"80vh"}}>

        </div>
    );
};

export default AboutDeveloper;