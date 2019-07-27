import React from 'react'
import { Container, Card } from 'react-bootstrap'

export default function Cards(props) {
    return (
        <div>
            <Container>
                <Card>
                    <Card key={props.car.id} >      {/* onClick={() => props.handleClick(props.car.id)} > */}
                        <Card.Img src={props.car.image}  />
                        <Card.Body>
                            <Card.Title style={{ color: 'black', textAlign: 'center', fontSize:'18px' }}>Model</Card.Title>
                            <Card.Text style={{ color: 'black' }}></Card.Text>
                        </Card.Body>
                    </Card>
                </Card>
            </Container>
        </div>
    )
}