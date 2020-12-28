import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CompanyName } from '../App.js';
import * as routes from "../routes/routes";
import AuthUserContext from "../auth/AuthUserContext";
import Divider from '@material-ui/core/Divider';

const Header = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <HeaderAuth userInfo={authUser} /> : <HeaderNonAuth />
    }
  </AuthUserContext.Consumer>
);

const HeaderNonAuth = () => (
  <div className="header" >
    <Navbar expand="lg">
      <Navbar.Brand href="/home"> {
        <div>
          {CompanyName}
          <img src="gavel.svg" style={{paddingLeft: 5, paddingBottom: 5}}/>
        </div>
      } </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href={routes.SIGN_UP}> Sign up </Nav.Link>
          <Nav.Link href={routes.LOG_IN}> Login </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Divider/>
  </div>
);

const HeaderAuth = ({ userInfo }) => (
  <div className="header" >
    <Navbar expand="lg">
      <Navbar.Brand href="/home"> {
        <div>
          {CompanyName}
          <img src="gavel.svg" style={{paddingLeft: 5, paddingBottom: 5}}/>
        </div>
      } </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href={routes.NEW_REVIEW}> <img style={{width: 27}} src="add.svg"/> </Nav.Link>
        </Nav>
        {/*<SignOutButton />*/}
      </Navbar.Collapse>
    </Navbar>
    <Divider/>
  </div>
);
//style={{background: "#1CB0F6"}}

export default Header;
