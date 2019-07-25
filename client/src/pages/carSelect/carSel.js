import React, { useState, useEffect } from 'react'
import Logo from '../../components/logo'
// import Container from '@material-ui/core/Container'
import { Carousel, Container, Form, Row, Col, Button } from 'react-bootstrap'
import images from '../../baseCars.json'
import './carSel.css'
import Player from '../../utils/player'
import axios from 'axios'

const carSel = props => {


const handleSelect = () => {

   axios.post('/players', {userName: 'car', 
        uid: 'dfhsdhfkshdkf'} )
    .then(_ => console.log('added'))
    .catch(e => console.log(e))
}



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
                    {images.map(car => (
                        <Carousel.Item key={1} id={1}>
                            <img className="d-block w-100"
                                src={car.stock}
                                alt={1}
                                thumbnail="true" />
                            <Carousel.Caption>
                                <small>Model of Car</small>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                
                <Button variant="success" onClick={handleSelect}>GO!</Button>
​
​
            </Container>
        </div>
    )
}
export default carSel 