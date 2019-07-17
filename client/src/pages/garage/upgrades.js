import React from 'react'
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'react-bootstrap'

export default function Upgrades() {

    return (
        <div style={{ padding: '60px' }}>
            <h1 style={{ textAlign: 'center', color: '#e97718', fontSize: '25px' }}>WorkShop</h1>
            <Container>
                <Form>
                    <Form.Group controlId="NickName">
                        <Form.Label>Nick Name</Form.Label>
                        <Form.Control type="text" placeholder="Current Nickname" />
                        <Form.Text className="text-muted">
                            Update Nickname here
    </Form.Text>
                    </Form.Group>
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

            </Container>

        </div>
    )
}
