import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className="mx-auto">
            <div className="col-12 col-md-5">
                <img src="https://image.freepik.com/free-vector/red-heart-with-heartbeat-line-medical-background_1017-26835.jpg" alt="" />
            </div>
            <div>
                <Form className="col-12 col-md-7">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <br />
                    <button className="btn btn-warning m-5">Submit</button>
                    <button className="btn btn-warning m-5">Google Sign In</button>
                </Form>
            </div >
        </div >
    );
};

export default Login;