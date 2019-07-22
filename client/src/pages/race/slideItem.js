import React, {useState, useEffect} from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Cards from '../garage/cards.js'
import images from '../../baseCars.json'
import locations from '../../raceTrack.json'
import './race.css'

export default function SlideItem(props) {

    // //set state for Upg/Workshop to be hidden,
    // const [showWorkshop, setTrack] = useState(false)
    // const handleSelectLoc= () =>{
    //  setShowWorkshop(false)
    // }

    // console.log(images)
// state of current car, pass id to onclick then pass to component the current id or info,

    return (
        <div>
            <Container >
                <Carousel interval={false}>
                    {props.items.map(({itemImage, amount, name}, index) => (
                        <Carousel.Item>
                            <img className="d-block w-100"
                                src={itemImage}
                                alt={itemImage}
                                thumbnail />

                            <Carousel.Caption>
                                <h1>Available: {amount}</h1>
                                {amount > 0 ? <button id={index} value={name} data-image={itemImage} onClick={props.itemSelect}>Use</button> : null}
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    )
}