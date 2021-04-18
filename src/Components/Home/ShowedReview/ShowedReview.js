import React from 'react';
import '../ShowReview/ShowReview.css'
const ShowedReview = (props) => {
    const {name, description, company} = props.data
    return (
    <div className="card shadow col-md-4 col-xm-12 col-lg-4">
        <div className="card-body">
            <p className="card-text">{name}</p>
        </div>
        <div className="card-footer d-flex  align-items-center">
            <div>
                <h6 className="text-primary">service: {company}</h6>
               <p>description: {description}</p>
            </div>
        </div>
   </div>
    );
};

export default ShowedReview;