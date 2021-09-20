import React, { Component } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

export default class login extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Container fluid="sm" className="ct">
            <h1 className="Header" style={{ MarginBottom: 50 }}>
              BSIS SPACE Login
            </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>학교 이메일</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="로그인 유지" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    로그인
                </Button>
            </Form>
          </Container>
        </Container>
      </>
    );
  }
}
