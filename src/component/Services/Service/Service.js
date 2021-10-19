import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img, time, call } = service
    return (

        <Col>
            <Card>
                <Card.Img style={{ height: '170px', objectFit: 'cover' }} variant="top" src={img} />
                <Card.Body>
                    <h4>{name}</h4>
                    <h4>Service Time:- {time}</h4>
                    <h4>Call:-{call}</h4>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;