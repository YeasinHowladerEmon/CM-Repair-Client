import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm,} from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://cryptic-waters-52200.herokuapp.com/createAdmin',{ 
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => console.log('server side', res))
    }
    return (
       <Form onSubmit={handleSubmit(onSubmit)}>
             <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" name="email" ref={register} />
            </Form.Group>
            <input className="btn-primary" type="submit" />
       </Form>
    );
};

export default MakeAdmin;