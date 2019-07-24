import React from 'react'
import { Carousel, Container, Button } from 'react-bootstrap'

export default function Inventory(props) {
    return (
        <div>
            <Container style={{ textAlign: 'center', fontSize: '25px' }}>
                <Carousel interval={false} style={{ textAlign: 'center' }}>
                    {props.items.map(({itemImage, name, amount, cost}, index) => (
                        <Carousel.Item>
                            <small>Inventory: {amount} </small>
                            <img className="d-block w-100"
                                src={itemImage}
                                alt={name}
                                thumbnail />
                            <Carousel.Caption>
                                <span>${cost}</span>
                                <Button style={{ float: 'right' }} data-cost={cost} id={name} value={amount} data-i={index} onClick={props.handleBuyItem}>Buy</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    )
}
