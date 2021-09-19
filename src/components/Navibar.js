import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaHome, FaSignOutAlt, FaSignInAlt, FaList, FaServer, FaRegCommentAlt, FaUserEdit} from "react-icons/fa";
import logo from './logo.png'

export default class Navibar extends Component {
  render() {
    return (
      <>
        <div style={{ paddingTop: 60 }}>
          <Navbar bg="light" variant="light" expand="md" fixed="top" className="nav-item shadow no-drag">
            <Navbar.Brand href="/" style={{ fontSize: 20, fontWeight: 700, fontFamily: "NanumSquare" }}>
              <img src={logo} alt="" style={{ width: 35, marginRight: 10}} />
              BSIS SPACE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                
                <Nav.Link href="/"> <FaHome /> 홈</Nav.Link>
                <Nav.Link href="/dm"> <FaRegCommentAlt /> DM</Nav.Link>
                <NavDropdown title="커뮤니티" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/community/all">
                    <FaServer /> 전체 커뮤니티
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/community/class">
                    <FaList /> 반별 커뮤니티
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="내정보" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/myinfo">
                    <FaUserEdit /> 정보수정 및 탈퇴
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/">
                    <FaSignOutAlt /> 로그아웃
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/login"><FaSignInAlt /> 로그인</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
  }
};