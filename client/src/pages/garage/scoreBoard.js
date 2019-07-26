import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './scoreBoard.css'


export default function (props) {
    return (
        <div>

            <Container className=' text-center pt-5'>
                <Row>
                    <Col xs={12} className='pt-2 pb-5'>
                        <h1 className='userName' id='garageUserName'>{props.info.userName}'s Garage</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <h4 className='garageInfo pt-5 mt-5 pb-2'>Wins:{props.info.win}</h4>
                    </Col>
                    <Col xs={4}>
                        <h4 className='garageInfo pt-5 mt-5 pb-2'>Losses:{props.info.loss}</h4>
                    </Col>
                    <Col xs={4}>
                        <h4 className='garageInfo pt-5 mt-5 pb-2'>Ties:{props.info.tie}</h4><br />
                    </Col>
                    <Col xs={12}>
                        <h4 className='cashmoney text-right pt-5 mt-5 pr-5'>Cash: {props.info.money}</h4>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}