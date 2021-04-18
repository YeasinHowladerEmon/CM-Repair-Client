import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const AddService = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [imageURL, setImageURL] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const serviceData = {
      title: data.title,
      description: data.description,
      amount: data.amount,
      imageURL: imageURL
    }
    console.log(data)
    const url = `https://cryptic-waters-52200.herokuapp.com/addService`

    console.log(serviceData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    })
      .then(res => console.log('server side', res))
  };
  const handleImageUpload = e => {
    console.log(e.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '0f708fcbebbec1c7a459ec195f20ea4e');
    imageData.append('image', e.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title name</Form.Label>
          <Form.Control type="text" placeholder="title name" name="title" ref={register} />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Amount of taka</Form.Label>
          <Form.Control type="text" placeholder="Amount" name="amount" ref={register} />
        </Form.Group>
        <br />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>description</Form.Label>
          <Form.Control as="textarea" name="description" rows={3} ref={register} />
        </Form.Group>
        <br />
        <input type='file' onChange={handleImageUpload} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;