import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card } from 'react-bootstrap';
import './InfoCard.css'
const InfoCard = ({ info }) => {
    return (
        <div className="col-md-6 col-lg-4 col-xm-12">
                <Card className="zoom" style={{ border: 'none', width: '22rem'}}>
                    <Card.Img variant="top" src={info.img} />
                    <Card.Body className={`text-white text-center info-${info.background}`}>
                    <FontAwesomeIcon className="mt-3 mb-3" style={{fontSize: '3em'}} icon={info.icon} />
                        <Card.Title as={'h4'}> {info.title}</Card.Title>
                        <Card.Text>
                            {info.details}
                        </Card.Text>
                        <Button className="mt-3">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </div>







    );
};

export default InfoCard;