import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="py-5">
            <Container>
                <div>

                </div>
                <h4 style={{ fontSize: "3rem" }} className="text-center pb-3 text-warning">Our World Class Checkup Tools</h4>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;