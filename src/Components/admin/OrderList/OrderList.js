import React, { useEffect, useState } from 'react';
import OrderListed from '../OrderListed/OrderListed';

const OrderList = () => {
    const [bookList, setBookList] = useState([]);
   

    useEffect(() => {
        fetch('http://localhost:5000/orderList')
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