import React, { useState, useEffect } from 'react'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap'
import Upgrades from './upgrades'
import './scoreBoard.css'

export default function Slide(props) {

    //set state for Upg/Workshop to be hidden,
    const [showWorkshop, setShowWorkshop] = useState(false)
    const [currentCar, setCurrentCar] = useState(props.info.cars[0])

    const [currentIndex, setCurrentIndex] = useState(null)
    const handleSelect = () => {
        setShowWorkshop(false)
    }

    const handleShowWorkShop = (car, index) => {
        setCurrentCar(car)
        setShowWorkshop(true)
        setCurrentIndex(index)
    }

    // state of current car, pass id to onclick then pass to component the current id or info,
    return (
        <div>

            <Container className='text-center slidecontainer'>
                {/* <Row>
                    <Col xs={12} className='text-center pt-5' style={{ fontSize: '37px' }}>
                        <h1>
                        {props.info.cars.carName}
                        </h1>
                    </Col>
                </Row> */}

                <Carousel interval={false} onSelect={handleSelect} style={{ marginBottom: '20%' }}>
                    {props.info.cars.map(({ carName, imageLink }, index) => (

                        <Carousel.Item onClick={() => handleShowWorkShop(props.info.cars[index], index)}>
                            <img className="d-block w-100"
                                src={imageLink}
                                // alt={id}
                                style={{ height: '25%', width: '50%' }}
                                thumbnail />

                            <Carousel.Caption>

                                <h2>{carName}</h2>
                            </Carousel.Caption>

                        </Carousel.Item>
                    ))}
                </Carousel>

            </Container>

            {showWorkshop ? <Upgrades info={props.info} car={currentCar} index={currentIndex} handleSelect={handleSelect} handleBodyKit={props.handleBodyKit}/> : null}

        </div>
    )
}
