import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const  {imageURL, title, description, _id, amount} = props.services
    return (
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
        {/* // <div className="col-md-4 col-xm-12"> */}
            {/* <Card style={{ border: "0", width: '18rem' }}>
            <Card.Img variant="top" src={services.img} />
            <Card.Body>
                <Card.Title>{services.name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card> */}
            {/* /${_id} {`/serviceId`}*/}
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