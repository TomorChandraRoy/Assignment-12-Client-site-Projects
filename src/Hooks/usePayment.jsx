import { useEffect, useState } from "react";

const usePayment = () => {
    const [error, setError] = useState();
    return (
       useEffect(()=>{
        fetch('https://server-site-project.vercel.app/payment')
        .then(res=> res.json())
        .then(data=>setError(data))
       },[])
    );
};

export default usePayment;