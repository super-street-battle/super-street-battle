import React, {useEffect, useState, useRef} from 'react'
import Logo from '../../components/logo'
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
        axios.post('/players', { uid: props.uid, userName: username.current.value })
          .then(_ => {
            Player.checkuid({ uid: props.uid })
              .then(({ data }) => {
                setLoginState({ ...loginState, newUser: 'old' })
                localStorage.setItem('_id', data)
              })
              .catch(e => console.log(e))
              axios.post('/cars', {
                carName: cars[carID].name,
                   uid: props.uid,
                   imageLink: cars[carID].stock,
                   animation:  cars[carID].animation,
              })
            .then(r => console.log('Data Added'))
            .catch(e => console.log(e))
          })
          .catch(e => console.log(e))
    
      }
    
    return (
        <div className='main_container' >
            <Container >
                <Form>
                    <Row>
                        <Col>
                            <Form.Control ref={username} placeholder="Who is Driving?" />
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
                                <Button variant="success" id={index} onClick={loginState.handleAddUser}>GO!</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>


            </Container>
        </div>
    )
}
export default CarSel 