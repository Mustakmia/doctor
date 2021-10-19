import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
  const { name, img, expert, department, time, call } = doctor
  return (
    <Col>
      <Card>
        <Card.Img style={{ height: '170px', objectFit: 'cover' }} variant="top" src={img} />
        <Card.Body>
          <h2>{name}</h2>
          <h4>Expert In:-{expert}</h4>
          <h4>Department:-{department}</h4>
          <h4>Time:-{time}</h4>
          <h3>Call:-{call}</h3>
        </Card.Body>
        <button className="btn btn-warning">More Details</button>
      </Card>
    </Col>
  );
};

export default Doctor;