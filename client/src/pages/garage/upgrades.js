import React, { useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'react-bootstrap'
import Cards from './cards'

export default function Upgrades(props) {
    useEffect(() => console.log(props.car))
    return (
        <div style={{ padding: '60px' }}>
            <h1 style={{ textAlign: 'center', color: '#e97718', fontSize: '25px', padding:'50px' }}>WorkShop</h1>

            <Container>
                <Row style={{marginLeft: '20%'}}>
                    <Col >
                        <Cards car={props.car} />
                    </Col>
                    <Col >
                        <Form>
                        {/* <Form.Group controlId="NickName">
                        <Form.Label>Nick Name</Form.Label>
                        <Form.Control type="text" placeholder="Current Nickname" />
                        <Form.Text className="text-muted">
                        Update Nickname here
                        </Form.Text>
                        </Form.Group> */}
                            <Form.Group controlId="formBasicChecbox">
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
                </Row>
            </Container>
        </div>
    )
}