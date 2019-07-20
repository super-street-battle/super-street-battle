import React from 'react'
import { Carousel, Container, Button } from 'react-bootstrap'
import images from '../../baseCars.json'

export default function Inventory() {
    return (
        <div>
            <Container style={{ textAlign: 'center', fontSize: '25px' }}>
                <h1 style={{ color: '#e97718',marginTop: '175px' }}>Inventory</h1>
                <Carousel interval={false} style={{ textAlign: 'center' }}>
                    {images.map(car => (

                        <Carousel.Item key={car.id} id={car.id} >
                            <img className="d-block w-100"
                                src={car.image}
                                alt={car.id}
                                thumbnail />

                            <Carousel.Caption>

                                <small>Qty:0 </small>
                                <Button style={{ float: 'right' }}>Buy</Button>
                            </Carousel.Caption>


                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    )
}
