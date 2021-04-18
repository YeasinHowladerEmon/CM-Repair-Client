import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookListed from '../BookListed/BookListed';

const BookList = () => {
    const [bookList, setBookList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('https://cryptic-waters-52200.herokuapp.com/bookList?email=' + loggedInUser.email)
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