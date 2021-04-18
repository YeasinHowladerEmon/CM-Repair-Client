import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookListed from '../BookListed/BookListed';

const BookList = () => {
    const [bookList, setBookList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5000/bookList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookList(data))
    }, [])
    return (
        <div className='row'>
            <BookListed bookList={bookList}/>
        </div>
    );
};

export default BookList;