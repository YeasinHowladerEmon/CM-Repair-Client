import React from 'react';
import { Card } from 'react-bootstrap';

const BookListed = ({ bookList }) => {
    return (
        <div className="col-md-6 col-xm-12 col-lg-4">
            {
                bookList.map((bookList, index) => 
              <Card style={{ width: '18rem', marginTop: '50px' }}>
                    <Card.Img variant="top"style={{width:"40%"}} src={bookList.serviceId.imageURL} />
                    <Card.Body>
                        <Card.Title>{bookList.serviceId.title}</Card.Title>
                        <Card.Text>
                        {bookList.serviceId.description}
                        </Card.Text>
                    </Card.Body>
                    </Card>    
                )
            }
        </div>
    );
};

export default BookListed;