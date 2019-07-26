import React, {useEffect, useState, useRef} from 'react'
import Nav2 from '../../components/nav2'
import Nav from '../../components/nav'
import Logo from '../../components/logo'
import { Carousel, Container, Form, Row, Col, Button, Card } from 'react-bootstrap'
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
                // setLoginState({ ...loginState, newUser: 'old' })
                props.olduser('old')
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

          window.location = "/"
      }
    
    return (

                <Container >

                <Form>
                    <Row>
                        <Col className='pt-3'>
                            <Form.Control ref={username} placeholder="Who is Driving?"/>
                        </Col>
                    </Row>
                </Form>

            

                <Row>
                        <Col className="text-center">
                        <Carousel interval={false}>
                        {images.map((car, index) => (
                        <Carousel.Item key={1} id={1}>
                            <img src={car.stock}
                                alt={1}
                                thumbnail="true" />
                            <Carousel.Caption>
                      <div>   <small>Car Model: {car.name}</small> </div>
                                <Button className="selectitembtn" variant="success" id={index} onClick={loginState.handleAddUser}>Go</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

                        </Col>
=======


                <Row>
                        <Col className="text-center">


                <Carousel interval={false}>
                    {console.log(images)}
                    {images.map((car, index) => (
                        <Carousel.Item key={1} id={1}>
                            <img className="d-block w-100"
                                src={car.stock}
                                alt={1}/>
                                <Carousel.Caption>
                                <div>   <small>Car Model: {car.name}</small> </div>
                                          <Button className="selectitembtn" variant="success" id={index} onClick={loginState.handleAddUser}>+</Button>
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
