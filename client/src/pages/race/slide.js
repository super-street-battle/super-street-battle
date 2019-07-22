import React, {useState, useEffect} from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Cards from '../garage/cards.js'
import images from '../../baseCars.json'
 
export default function Slide(props) {

    //set state for Upg/Workshop to be hidden,
    const [showWorkshop, setShowWorkshop] = useState(false)
    const handleSelect= () =>{
     setShowWorkshop(false)
    }

    // console.log(images)
// state of current car, pass id to onclick then pass to component the current id or info,
    return (
        <div>
            <Container >
                <Carousel interval={false} onSelect={handleSelect}>
                    {props.cars.map(({imageLink, engine, tire, bodyKit, carName, carNickname, _id}) => (
                        
                        <Carousel.Item key={_id} id={_id} onClick={() => setShowWorkshop(true)}>
                            <img className="d-block w-100"
                                src={imageLink}
                                alt={carNickname}
                                thumbnail />

                            <Carousel.Caption>
                                <h1>{carNickname}</h1>
                                <small>{carName}</small>
                                <button id={_id} data-engine={engine} data-tire={tire} data-bodykit={bodyKit} onClick={props.carSelect}>Select</button>
                            </Carousel.Caption>

                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    )
}