import React, { useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'react-bootstrap'
import Cards from './cards'

export default function Upgrades(props) {
    useEffect(_ => {console.log(props.info)}, [])
    return (
        <div>
            <Container style={{paddingBottom:'15%'}}>
                <Row>
                    <Col xs={12} md={6} className='text-left'>
                        <h1 className='pt-5 pb-5' style={{ textAlign: 'center', color: '#e97718', fontSize: '25px' }}>Upgrades</h1>
                    </Col>
                </Row>
               
                <Row className="text-center">
                    <Col xs={4}>
                        
                        <h2 style={{ padding: '5px' }}>Tires</h2>
                        {/* <div style={{borderRadius: '35px', borderStyle: 'solid', borderWidth:'3px', borderColor: 'white'}}> */}
                        <h4>{props.car.tire}</h4>
                        <h5>${props.info.tirePrice}</h5>
                        <button id={props.index}  value={props.info.tirePrice} onClick={props.handleTire}>Upgrade</button>
                        {/* </div> */}
                    </Col>
                    <Col xs={4}>
                        <h2 style={{ padding: '5px' }}>Engine</h2>
                        <h4>{props.car.engine}</h4>
                        <h5>${props.info.enginePrice}</h5>
                     <button id={props.index}  value={props.info.enginePrice} onClick={props.handleEngine}>Upgrade</button>
                    </Col>
                    <Col xs={4}>
                        <h2 style={{ padding: '5px' }} >Body Kit</h2>
                        <h4>{props.car.bodyKit}</h4>
                        {props.car.bodyKit === 3 ? null : <h5>$1000</h5>}
                        {props.car.bodyKit === 3 ? null : <button id={props.index} value='1000' onClick={props.handleBodyKit}>Upgrade</button>}
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}