import React, { Component } from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

export default class DM extends Component {
  render() {
    return (
      <>
        <h1 className="Header" style = {{ padding : 10, marginLeft : 150 }} fluid="sm">
          BSIS SPACE Direct Message Service
        </h1>
        <Container>
          <Container fluid="sm" className="ct">
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action href="#link1">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Link 2
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                This one is a button
              </ListGroup.Item>
            </ListGroup>
          </Container>
          <Container>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Container>
        
      </>
    );
  }
}