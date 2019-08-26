import React, {useState, useEffect} from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './challenge.css'

export default function SlideItem(props) {
// state of current car, pass id to onclick then pass to component the current id or info,
    return (
        <div>
            <Container >
                <Carousel interval={false}>
                    {props.items.map(({itemImage, amount, name, cost}, index) => (
                        <Carousel.Item className="items3">
                            <img className="d-block w-100 item"
                                src={itemImage}
                                alt={itemImage}
                                thumbnail />

                            <Carousel.Caption className='items'>
                                <h1>Inventory: {amount}</h1>
                                {amount > 0 ? <button className="selectitembtn" id={index} value={name} data-image={itemImage} onClick={props.itemSelect}>Use</button> : <button className="selectitembtn" id={name} data-amount={amount} data-i={index} value={cost} onClick={props.handlepurchase} >Purchase</button>}
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    )
}