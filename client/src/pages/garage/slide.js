import React, { useState, useEffect } from 'react'
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap'
import Upgrades from './upgrades'
import './scoreBoard.css'

export default function Slide(props) {

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

    return (
        <div>

            <Container className='text-center slidecontainer'>
                <Carousel interval={false} onSelect={handleSelect} style={{ marginBottom: '9%' }}>
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
