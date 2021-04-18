import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import { useForm} from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
      console.log(data)
      const url = `https://cryptic-waters-52200.herokuapp.com/addReview`
  
      fetch(url, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => console.log('server side', res))
    };
    return (
        <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" name="name" ref={register} />
        </Form.Group>
        <br />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>company name and design</Form.Label>
          <Form.Control type="text" name="company" rows={3} ref={register} />
        </Form.Group>
        <br />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>description</Form.Label>
          <Form.Control as="textarea" name="description" rows={3} ref={register} />
        </Form.Group>
        <br />
        <input type="submit" />
      </form>
    </div>
    );
};

export default Review;