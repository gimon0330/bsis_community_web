import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Nav, ListGroup, Table } from 'react-bootstrap';
import Title from '../components/Title';

const handleSelect = (eventKey) => eventKey;

export default class Home extends Component {
    render() {
        return (
            <>
                <Title title="BSIS SPACE" subtitle="부산일과학고등학교 학생들을 위한 공간" className="Title-gradient" />
                <Container fluid="md" className="ct Intro-ct" style = {{ marginTop: 50 }}>
                    <Container>
                        <Row className="no-gutters">
                            <Col style={{ padding: 10 }}>
                                <Card className="mb-3">
                                    <Card.Header>급식 게시판</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="project-card-title">이번달의 급식</Card.Title>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                {Array.from({ length: 7 }).map((_, index) => (
                                                    <th key={index}>{index+1}요일</th>
                                                ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Array.from({ length: 5 }).map((_, r_index) => (
                                                    <tr>
                                                    {Array.from({ length: 7 }).map((_, index) => (
                                                        <td key={index}>{(r_index*7) + index}</td>
                                                    ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>학교 일정 게시판</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="project-card-title">이번달의 일정</Card.Title>
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
                                        <Card.Title className="project-card-title">최근 게시글</Card.Title>
                                        <ListGroup>
                                            <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                                            <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
                                            <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </>
        )
    }
}
