import React, {useState, useEffect} from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Cards from '../garage/cards.js'
import images from '../../baseCars.json'
import locations from '../../raceTrack.json'
import './race.css'

export default function SlideLoc(props) {

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
                    {locations.map(location => (
                        // console.log(location.tracks)
                        <Carousel.Item key={location.id} id={location.id}>
                            <div className="loc">
                                <h1>{location.tracks}</h1>
                                <small>{location.terrain}</small>
                                </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    )
}