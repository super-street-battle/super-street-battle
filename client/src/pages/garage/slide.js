import React, {useState, useEffect} from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Cards from './cards.js'
import images from '../../baseCars.json'
import Upgrades from './upgrades'
 
export default function Slide(props) {

    //set state for Upg/Workshop to be hidden,
    const [showWorkshop, setShowWorkshop] = useState(false)
    const handleSelect= () =>{
     setShowWorkshop(false)
    }
// state of current car, pass id to onclick then pass to component the current id or info,
    return (
        <div>
            <Container >
                <Carousel interval={false} onSelect={handleSelect}>
                    {images.map(car => (
                        
                        <Carousel.Item key={car.id} id={car.id} onClick={() => setShowWorkshop(true)}>
                            <img className="d-block w-100"
                                src={car.image}
                                alt={car.id}
                                thumbnail />

                            <Carousel.Caption>
                                <h1>Car NickName: Start Car</h1>
                                <small>Model of Car</small>
                            </Carousel.Caption>

                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>

            {/* create onclick function which will pass id of car to upgrades which will then open up the workshop */}
               { showWorkshop ? <Upgrades/> :  null}
         

        </div>
    )
}