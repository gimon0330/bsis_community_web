import React, { Component } from 'react';
import Title from '../components/title';
import { Container, Button } from 'react-bootstrap';

export default class myinfo extends Component {
  render() {
    return (
      <>
        <Title title="BSIS SPACE" subtitle="부산일과학고등학교 학생들을 위한 공간" className="Title-gradient" />
        <Container fluid>
          <Container fluid="sm" className="ct">
            <h1 className="Header">
              MATHCOM - BSIS 정보 수학 융합동아리
            </h1>
            안녕 친구들?
          </Container>
        </Container>
      </>
    );
  }
}