import React, { useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'react-bootstrap'
// import Cards from './cards'
import './upgrades.css'

const handlekitupgrade = props=> {
    if (props.car.bodyKit === 1) {
        return (
            <>
            <h5>$1000</h5>
            <button id={props.index} value='1000' onClick={props.handleBodyKit}>Upgrade</button>
            </>
        )
    } else if (props.car.bodyKit === 2) {
        return (
            <>
            <h5>$2500</h5>
            <button id={props.index} value='2500' onClick={props.handleBodyKit}>Upgrade</button>
            </>
        )
    }
}

export default function Upgrades(props) {
    useEffect(_ => {console.log(props.car)}, [])
        const handleselling = e => {
            props.info.sellcar(e)
            props.handleSelect()
        }
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
                        {/* tire */}
                        <h2 className="upgItems" >Tires</h2>
                        {/* <div style={{borderRadius: '35px', borderStyle: 'solid', borderWidth:'3px', borderColor: 'white'}}> */}
                        <h4 className="upgItems" >{props.car.tire}</h4>
                        <h5 className="upgItems" >${props.info.tireprice[props.index]}</h5>
                        
                        <button className="upgItems" id={props.index}  value={props.info.tireprice[props.index]} onClick={props.handleTire}>Upgrade</button>
                        {/* </div> */}
                    </Col>

                {/* engine */}
                    <Col xs={4}>
                        <h2 className="upgItems" >Engine</h2>
                        <h4 className="upgItems" >{props.car.engine}</h4>
                        <h5 className="upgItems" >${props.info.engineprice[props.index]}</h5>
                     <button className="upgItems"  id={props.index}  value={props.info.engineprice[props.index]} onClick={props.handleEngine}>Upgrade</button>
                    </Col>
                    
                    {/* body kit */}
                    <Col xs={4}>
                        <h2 className="upgItems"  >Body Kit</h2>
                        <h4 className="upgItems" >({props.car.bodyKit}/3)</h4>
                       <h5 className="upgItems"> {handlekitupgrade(props)}</h5>
                    </Col>
                </Row>
                {/* button to sell car */}
                <Row style={{float:'right', marginTop:'7%'}}>
                    <button  className="sellCar"  id={props.car._id} value={props.index} data-price={props.car.value} onClick={handleselling}>Sell Car</button>
                </Row>
            </Container>
        </div>
    )
}

