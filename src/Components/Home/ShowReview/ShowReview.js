import React, { useEffect, useState } from 'react';
import ShowedReview from '../ShowedReview/ShowedReview';
import './ShowReview'

const ShowReview = () => {
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch('https://cryptic-waters-52200.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviewData(data))
        
    }, [])
    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header">
                <h2 className="text-center text-primary text-uppercase">Review</h2>
            </div>
            <div className="card-deck mt-5 row">
                 {
                     reviewData.map(data => <ShowedReview data={data} key={data._id}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default ShowReview;