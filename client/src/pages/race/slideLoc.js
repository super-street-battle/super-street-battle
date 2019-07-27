import React, {useState, useEffect} from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './race.css'

export default function SlideLoc(props) {

    return (
        <div>
            <Container >
                <Carousel interval={false}>
                    {props.tracks.map(({id, track, terrain, weather}) => (
                        // console.log(track.tracks)
                        <Carousel.Item key={id} id={id}>
                            <div className="loc">
                                <h1 className="location">{track}</h1>
                                <small>{terrain}</small>
                                <button className="locbtn" onClick={props.trackselect} id={weather.part} value={weather.point}>+</button>
                                </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    )
}