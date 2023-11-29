import { useEffect, useState } from "react";

const usePayment = () => {
    const [error, setError] = useState();
    return (
       useEffect(()=>{
        fetch('http://localhost:5000/payment')
        .then(res=> res.json())
        .then(data=>setError(data))
       },[])
    );
};

export default usePayment;