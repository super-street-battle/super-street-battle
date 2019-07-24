import React, { useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'react-bootstrap'
import Cards from './cards'

export default function Upgrades(props) {
    useEffect(() => console.log(props.car))
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6} className='text-left'>
                        <h1 className='pt-5 pb-5' style={{ textAlign: 'center', color: '#e97718', fontSize: '25px' }}>Upgrades</h1>
                    </Col>
                </Row>
                {/* <Row> */}
                {/* <Col >
                        <Cards car={props.car} />
                    </Col> */}
                {/* <Col >
                        <Form> */}
                {/* <Form.Group controlId="NickName">
                        <Form.Label>Nick Name</Form.Label>
                        <Form.Control type="text" placeholder="Current Nickname" />
                        <Form.Text className="text-muted">
                            Update Nickname here
                        </Form.Text>
                        </Form.Group> */}
                {/* <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Upgrade: Option" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Upgrade: Option" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Upgrade: Option" />
                            </Form.Group>
                            <Button style={{ color: '#f3ff44' }} variant="outline-warning" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row> */}
                <Row className="text-center">
                    <Col xs={4}>
                        <h2 style={{ padding: '5px' }}>Tires</h2>
                        {/* <div style={{borderRadius: '35px', borderStyle: 'solid', borderWidth:'3px', borderColor: 'white'}}> */}
                        <h4>(0/3)</h4>
                        {/* </div> */}
                    </Col>
                    <Col xs={4}>
                        <h2 style={{ padding: '5px' }}>Engine</h2>
                        <h4>(0/3)</h4>
                    </Col>
                    <Col xs={4}>
                        <h2 style={{ padding: '5px' }} >Body Kit</h2>
                        <h4>(0/3)</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}