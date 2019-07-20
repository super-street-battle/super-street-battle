import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './scoreBoard.css'


export default function() {
    return (
        <div>
            <Jumbotron  style={{ height: '0px', width: '50%', textAlign: 'center', marginTop: '3%', opacity: ' .9', backgroundColor: '#e97718', float: 'right' }} >

                <h1 className='jumboInfo'  style={{marginTop:'-47px'}}>Your Username</h1>
                <Row style={{ marginLeft: '5%' ,marginBottom:'5px'}} >
                    
                    <h4 className='jumboInfo' style={{ padding: '20px' }}>Wins:0</h4>
                    <h4 className='jumboInfo' style={{ padding: '20px' }}>Losses:0</h4>
                    <h4 className='jumboInfo' style={{ padding: '20px' }}>Ties:0</h4><br />
                    <h4 className='jumboInfo' style={{ padding: '20px', color: 'black', fontSize: '20px' }}>$200</h4>
                </Row>

            </Jumbotron>
        </div>
    )
}
