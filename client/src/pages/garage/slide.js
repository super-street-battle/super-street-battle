import React, { useState, useEffect } from 'react'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap'
import Cards from './cards.js'
import Upgrades from './upgrades'
import images from '../../baseCars.json'
import Axios from 'axios'

export default function Slide(props) {

    //set state for Upg/Workshop to be hidden,
    const [showWorkshop, setShowWorkshop] = useState(false)
    const [currentCar, setCurrentCar] = useState(props.info.cars[0])
    const handleSelect = () => {
        setShowWorkshop(false)
    }

    const handleShowWorkShop = (car) => {
        setCurrentCar(car)
        setShowWorkshop(true)
    }

    // state of current car, pass id to onclick then pass to component the current id or info,
    return (
        <div>

            <Container className='text-center'>
                {/* <Row>
                    <Col xs={12} className='text-center pt-5' style={{ fontSize: '37px' }}>
                        <h1>
                        {props.info.cars.carName}
                        </h1>
                    </Col>
                </Row> */}

                <Carousel interval={false} onSelect={handleSelect} style={{marginBottom:'20%'}}>
                    {props.info.cars.map(({carName, imageLink},index) => (

                        <Carousel.Item  onClick={() => handleShowWorkShop(props.info.cars[index])}>
                            <img className="d-block w-100"
                                src={imageLink}
                                // alt={id}
                                style={{height: '25%', width:'50%'}}
                                thumbnail />

                            <Carousel.Caption>

                                <h2>{carName}</h2>
                            </Carousel.Caption>

                        </Carousel.Item>
                    ))}
                </Carousel>

            </Container>

            {/* create onclick function which will pass id of car to upgrades which will then open up the workshop */}
            {showWorkshop ? <Upgrades info={props.info} car={currentCar} /> : null}


        </div>
    )
}