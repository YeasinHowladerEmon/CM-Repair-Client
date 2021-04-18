import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IeK4eDOkmfZk1nUFvHpD4w9RIxuge06XPUyBf87UuQ1tgc1BxPPG8WG14Vxm3tYwIDRKwIw4n3ae1cCx5QkgZNW00nqPB3gnO');
const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
        <SimpleCardForm handlePayment ={handlePayment} />
     </Elements>
    );
};

export default ProcessPayment;