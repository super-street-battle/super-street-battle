import React from 'react'
import { Carousel, Container, Button } from 'react-bootstrap'
import './scoreBoard.css'

export default function Inventory(props) {
    return (
        <div>
            <Container style={{ textAlign: 'center' }} className="invcon">
                <Carousel interval={false} style={{ textAlign: 'center' }}>
                    {props.items.map(({itemImage, name, amount, cost}, index) => (
                        <Carousel.Item>
                            <h1 className="inv">Inventory: {amount} </h1>
                            <img className="d-block w-100 itemimg"
                                src={itemImage}
                                alt={name}
                                thumbnail />
                            <Carousel.Caption className="garitems">
                                <span>${cost}</span>
                                <button className="garbuy" style={{ float: 'right' }} data-cost={cost} id={name} value={amount} data-i={index} onClick={props.handleBuyItem}>Purchase</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    )
}
