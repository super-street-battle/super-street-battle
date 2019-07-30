import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './upgrades.css'

const handlekitupgrade = props=> {
    if (props.car.bodyKit === 1) {
        return (
            <>
            <h5>$1000</h5>
            <button className="upgItemsbtn" id={props.index} value='1000' onClick={props.handleBodyKit}>↑</button>
            </>
        )
    } else if (props.car.bodyKit === 2) {
        return (
            <>
            <h5>$2500</h5>
            <button className="upgItemsbtn" id={props.index} value='2500' onClick={props.handleBodyKit}>↑</button>
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
                    <Col xs={12} className='text-left'>
                        <h1 className='upgrages' style={{ textAlign: 'center', color: '#e97718', fontSize: '25px' }}>Upgrades</h1>
                    </Col>
                </Row>
               
                <Row className="text-center">
                    <Col xs={4}>
                        <h2 className="upgItems" >Tires</h2>
                        <h4 className="upgItems" >{props.car.tire}</h4>
                        <h5 className="upgItems" >${props.info.tireprice[props.index]}</h5>
                        <button className="upgItemsbtn" id={props.index}  value={props.info.tireprice[props.index]} onClick={props.info.handleTire}>↑</button>
                    </Col>

                    <Col xs={4}>
                        <h2 className="upgItems" >Engine</h2>
                        <h4 className="upgItems" >{props.car.engine}</h4>
                        <h5 className="upgItems" >${props.info.engineprice[props.index]}</h5>
                     <button className="upgItemsbtn"  id={props.index}  value={props.info.engineprice[props.index]} onClick={props.info.handleEngine}>↑</button>
                    </Col>

                    <Col xs={4}>
      
                        <h2 className="upgItems"  >Body Kit</h2>
                        <h4 className="upgItems" >({props.car.bodyKit}/3)</h4>
                        {handlekitupgrade(props)}

                    </Col>
                </Row>

                <Row style={{float:'center', marginTop:'7%'}}>
                    <button  className="sellCar"  id={props.car._id} value={props.index} data-price={props.car.value} onClick={handleselling}>Sell Car</button>
                </Row>
            </Container>
        </div>
    )
}

