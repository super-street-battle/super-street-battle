import React, { useState, useEffect } from 'react'
import Logo from '../../components/logo'
// import Container from '@material-ui/core/Container'
import { Carousel, Container } from 'react-bootstrap'
import images from '../../baseCars.json'

//add username input 
//choose car
//profile image 
const carSel = props => {
    return (
        <div className='main_container'>
            <Container >
                <Carousel interval={false} onSelect={handleSelect}>
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
            </Container>
        </div>
    )
}
export default carSel 