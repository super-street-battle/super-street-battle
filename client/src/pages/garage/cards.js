import React from 'react'
import { Container, Card, CardColumns } from 'react-bootstrap'
// import images from '../../baseCars.json'
import images from '../../baseCars.json'
// import { textAlign } from '@material-ui/system';

export default function Cards(props) {
    console.log(images)
    return (
        <div>
            <Container>

                <CardColumns>
                    {images.map(cars => (
                        // console.log({ meme })
                        <Card key={cars.id}>      {/* onClick={() => props.handleClick(cars.id)} > */}
                            <Card.Img src={cars.image} style={{ height: "200px", width: '100%' }} />
                            <Card.Body>
                                <Card.Title style={{ color: 'black', textAlign: 'center' }}>Nick Name</Card.Title>
                                <Card.Text style={{ color: 'black' }}>Model of Car</Card.Text>
                            </Card.Body>

                        </Card>
                    ))}

                </CardColumns>

                <h1>this is the cards component</h1>

            </Container>
        </div>
    )
}