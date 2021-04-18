import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const { imageURL, title, description, _id, amount } = props.services
    return (
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <Link to={`/admin/serviceId/${_id}`}>
                <div className="card-flyer">
                    <div className="text-box">

                        <div className="image-box">
                            <img src={imageURL} alt="" />
                        </div>
                        <div className="text-container">
                            <h6>{title}</h6>
                            <p>{description}</p>
                            <h5>${amount}</h5>
                        </div>

                    </div>
                </div>
            </Link>

        </div>


    );
};

export default ServiceDetails;