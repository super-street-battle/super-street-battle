import React, { useState, useEffect } from 'react'
import Logo from '../../components/logo'
// import Container from '@material-ui/core/Container'
import { Carousel, Container, Form, Row, Col, Button } from 'react-bootstrap'
import images from '../../baseCars.json'
import './carSel.css'


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
                    {console.log(images)}
                    {images.map((car, index) => (
                        <Carousel.Item key={1} id={1}>
                            <img className="d-block w-100"
                                src={car.stock}
                                alt={1}
                                thumbnail="true" />
                            <Carousel.Caption>
                                <small>Model of Car</small>
                                <Button variant="success" car={car} i={index} onClick={props.handleAddUser}>GO!</Button> 
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
               
                {/* <Button variant="success" data-cost={cost} id={name} value={amount} data-i={index} onClick={props.handleAddUser}>GO!</Button> */}
 


            </Container>
        </div>
    )
}
export default carSel 