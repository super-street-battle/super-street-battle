import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './scoreBoard.css'


export default function (props) {
    return (
        <div>

            <Container>
                <Row>
                    <Col xs={12} >
                        <div className='userName' id='garageUserName'>{props.info.userName}'s Garage</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
      
                        <h4 className='cashmoney'>Cash: ${props.info.money}</h4>

                    </Col>

                </Row>
                <Row>
                    <Col xs={12}>
                        <h4 className='garageInfo'>Wins:{props.info.win}</h4>
                    </Col>
                    <Col xs={12}>
                        <h4 className='garageInfo'>Losses:{props.info.loss}</h4>
                    </Col>
                    <Col xs={12}>
                        <h4 className='garageInfo'>Ties:{props.info.tie}</h4><br />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}