import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";


const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [data, setData] = useState('');
    const [clientSecret, setClientSecret] =useState('');


    const stripe = useStripe();
    const elements = useElements();
    // const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        fetch('https://server-site-project.vercel.app/payment')
        .then(res=> res.json())
        .then(data=>setData(data))

       },[]);
       console.log(data[0]?.price);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
          
            return;
          }
          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('[error]', error);
            setError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
          }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}className="ml-5">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-sm btn-primary my-4 text-base" disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
            </form>
        </div>
    );
};

export default CheckOutForm;