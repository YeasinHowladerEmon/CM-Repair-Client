import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import './Booking.css'
import ProcessPayment from '../ProcessPayment/ProcessPayment'

const Booking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const [bookData, setBookData] = useState(null)
    const { id } = useParams();
    console.log(id)
    const [serviceId, setServiceId] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => setServiceId(data[0]))
    }, [id])

    const onSubmit = data => {
        setBookData(data);
    }
    const handlePaymentSuccess = paymentId => {
        console.log('form submit', bookData)
        const bookDataDetails = {
            ...loggedInUser,
            bookData,
            serviceId,
            paymentId
        };
        fetch('http://localhost:5000/addBook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookDataDetails)
          })
            .then(res => res.json())
            .then(data => {
              if (data) {
                alert('your order placed successfully')
              }
            })

    }
    return (
        <div  className="justify-content-center">
            {/* <h1 className="text-center text-primary">Book</h1> */}
            <div style={{display: bookData ? 'none' : 'block'}}>
            <form className="Booking-form " onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                {errors.email && <span className="error">Email is required</span>}
                <input name="service" defaultValue={serviceId.title} ref={register({ required: true })} placeholder="Your Address" />
                {errors.service && <span className="error">Address is required</span>}
                <input className="btn btn-primary" type="submit" />
            </form>
            </div>
            <div style={{display: bookData ? 'block' : 'none'}}>
                <h2>please pay for</h2>
                <p>Your service charge will be ${serviceId.amount}</p>
                <ProcessPayment handlePayment={handlePaymentSuccess} />
            </div>
        </div>
    );
};

export default Booking;