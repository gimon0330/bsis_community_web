import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'


export default class Home extends Component {
  render() {
    return (
      <>
        <footer className="Footer">
          <Container fluid="sm" className="text-center text-md-left">
            <Row>
              <Col md={5} className="mt-md-0 mt-3">
                <h4 className="text-uppercase">
                  BSIS SPACE
                </h4>
                <p>
                  부산일과학고등학교 학생 커뮤니티
                </p>
              </Col>
              <Col md={2}>
                <h5>사이트</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">홈</a>
                  </li>
                </ul>
              </Col>
              <Col md={2}>
                <h5>연계사이트</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="http://bsis.hs.kr">부산일과학고등학교 홈</a>
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="Footer-copyright text-center">
              Copyright © 2021 AGH All rights reserved.
            </div>
          </Container>
        </footer>
      </>
    );
  }
}