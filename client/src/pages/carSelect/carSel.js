import React, { useState, useEffect } from 'react'
import Logo from '../../components/logo'
// import Container from '@material-ui/core/Container'
import { Carousel, Container, Form, Row, Col, Button } from 'react-bootstrap'
import images from '../../baseCars.json'
import './carSel.css'
//add username input 
//choose car
//profile image 
const carSel = props => {





    return (
        <div className='main_container'>
            <Container >
            <Form>
            <Row>
                <Col>
                <Form.Control placeholder="Who is Driving?" />
                </Col>
            </Row>
            </Form>
                <Carousel interval={false}>
                    {images.map(car => (
                        <Carousel.Item key={car.id} id={car.id}>
                            <img className="d-block w-100"
                                src={car.image}
                                alt={car.id}
                                thumbnail />
                            <Carousel.Caption>
                                <small>Model of Car</small>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                
                <Button variant="success">GO!</Button>
​
​
            </Container>
        </div>
    )
}
export default carSel 