import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import Title from '../components/title';

const handleSelect = (eventKey) => eventKey;

export default class Home extends Component {
    render() {
        return (
            <>
                <Title title="BSIS SPACE" subtitle="부산일과학고등학교 학생들을 위한 공간" className="Title-gradient" />
                <Container fluid>
                <Container fluid="md" className="ct Intro-ct" style = {{marginTop: 50}}>
                    <Container>
                        <Row className="no-gutters">
                        <Col className="text-center" key="lunch" xl={6} lg={6} md={12} style={{ padding: 10 }}>
                            <Card>
                                <Card.Header>급식 게시판</Card.Header>
                                <Card.Body>
                                    <Card.Title className="project-card-title">이번달의 급식</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col key="board" xl={6} lg={6} md={12} style={{ padding: 10 }}>
                            <Card>
                                <Card.Header>
                                    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>

                                        <Nav.Item>
                                        <Nav.Link eventKey="1" href="#/home">
                                            전체 게시판
                                        </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                        <Nav.Link eventKey="2" title="Item">
                                            반별 게시판
                                        </Nav.Link>
                                        </Nav.Item>

                                    </Nav>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="project-card-title">전체 게시판</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                        
                    </Container>
                </Container>
                </Container>
            </>
        )
    }
}