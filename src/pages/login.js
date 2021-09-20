import React, { Component } from 'react';
import Title from '../components/title';
import { Container, Button } from 'react-bootstrap';

export default class login extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Container fluid="sm" className="ct">
            <h1 className="Header">
              BSIS SPACE Login
            </h1>
            ID
          </Container>
        </Container>
      </>
    );
  }
}
