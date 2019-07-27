import React, { useEffect, useState, useRef } from 'react'
import Nav from '../../components/nav'
import { Carousel, Container, Form, Row, Col, Button } from 'react-bootstrap'
import images from '../../baseCars.json'
import cars from '../../baseCars.json'
import './carSel.css'
import axios from 'axios'
import Player from '../../utils/player'

const CarSel = props => {
    const username = useRef()
    const [loginState, setLoginState] = useState({})

    loginState.handleAddUser = event => {
        const carID = event.target.id
        if (username.current.value === '' || username.current.value === ' ') {
            alert('Please choose a User Name')
        } else {
            axios.post('/players', { uid: props.uid, userName: username.current.value })
                .then(_ => {
                    Player.checkuid({ uid: props.uid })
                        .then(({ data }) => {
                            // setLoginState({ ...loginState, newUser: 'old' })
                            props.olduser('old')
                            localStorage.setItem('_id', data)
                        })
                        .catch(e => console.log(e))
                    axios.post('/cars', {
                        carName: cars[carID].name,
                        uid: props.uid,
                        imageLink: cars[carID].stock,
                        animation: cars[carID].animation,
                    })
                        .then(r => console.log('Data Added'))
                        .catch(e => console.log(e))
                })
                .catch(e => console.log(e))

        }
        window.location = "/"
    }

    return (
        <div>
            <Container >
                <Nav />
                <Form>
                    <Row>
                        <Col className='pt-3'>
                            <Form.Control ref={username} placeholder="Who is Driving?" />
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Col className="text-center">
                        <div className='choose'>Choose your car</div>
                        <Carousel interval={false}>
                            {images.map((car, index) => (
                                <Carousel.Item key={car.id} id={1}>
                                    <img className="d-block w-100"
                                        src={car.stock}
                                        alt={1} />
                                    <Carousel.Caption>
                                        <div>{car.name}</div>
                                        <br />
                                        <Button variant="success" id={index} onClick={loginState.handleAddUser}>+</Button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>

                </Row>

            </Container>
        </div>
    )
}
export default CarSel 
