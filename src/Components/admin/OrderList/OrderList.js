import React, { useEffect, useState } from 'react';
import OrderListed from '../OrderListed/OrderListed';

const OrderList = () => {
    const [bookList, setBookList] = useState([]);
   

    useEffect(() => {
        fetch('https://cryptic-waters-52200.herokuapp.com/orderList')
            .then(res => res.json())
            .then(data => setBookList(data))
    }, [])
    return (
        <div className='row'>
            <OrderListed bookList={bookList}/>
        </div>
    );
};

export default OrderList;