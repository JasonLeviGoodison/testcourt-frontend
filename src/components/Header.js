import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CompanyName } from '../App.js';
//import SignOutButton from "./account/SignOut";
import * as routes from "../routes/routes";

import AuthUserContext from "../auth/AuthUserContext";

const Header = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <HeaderAuth userInfo={authUser} /> : <HeaderNonAuth />
    }
  </AuthUserContext.Consumer>
);

const HeaderNonAuth = () => (
  <div className="header" >
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/Home"> {CompanyName} </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/*<Nav.Link href={routes.SIGN_UP} > Sign up </Nav.Link>
          <Nav.Link href={routes.SIGN_IN}> Login </Nav.Link>*/}
          <Nav.Link href={routes.NEW_REVIEW}> New Review </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

const HeaderAuth = ({ userInfo }) => (
  <div className="header" >
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"> {CompanyName} </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to={routes.HOME}>Home</Link>
          </Nav.Link>
          {userInfo.providerData[0].providerId === "facebook.com" ? null : (
            <Nav.Link>
              <Link to={routes.ACCOUNT}>Account</Link>
            </Nav.Link>
          )}
        </Nav>
        {/*<SignOutButton />*/}
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
