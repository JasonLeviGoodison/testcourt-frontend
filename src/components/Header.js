import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CompanyName } from '../App.js';
import * as routes from "../routes/routes";
import AuthUserContext from "../auth/AuthUserContext";
import { withRouter } from "react-router-dom";
import Divider from '@material-ui/core/Divider';

const Header = (props) => {
  const { history } = props;

  return (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <HeaderAuth userInfo={authUser} history={history} /> : <HeaderNonAuth history={history}/>
      }
    </AuthUserContext.Consumer>
  );
}

const HeaderNonAuth = ({history}) => {
    const onSignUpClicked = () => {
        history.push(routes.SIGN_UP);
    }
    const onLoginClicked = () => {
        history.push(routes.LOG_IN);
    }
    const homeClicked = () => {
        history.push(routes.HOME);
    }
    return (
        <div className="header" >
            <Navbar expand="lg">
                <Navbar.Brand onClick={homeClicked}> {
                    <div>
                    {CompanyName}
                    <img src={"http://localhost:3006/gavel.svg"}  style={{paddingLeft: 5, paddingBottom: 5}}/>
                    </div>
                } </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link onClick={onSignUpClicked}> Sign up </Nav.Link>
                    <Nav.Link onClick={onLoginClicked}> Login </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Divider/>
        </div>
  );
}

const HeaderAuth = ({ userInfo, history }) => {
    const onNewReviewClicked = () => {
        history.push(routes.NEW_REVIEW);
    }
    const homeClicked = () => {
        history.push(routes.HOME);
    }
    return (
        <div className="header" >
            <Navbar expand="lg">
                <Navbar.Brand onClick={homeClicked}> {
                    <div>
                    {CompanyName}
                    <img src={"http://localhost:3006/gavel.svg"} style={{paddingLeft: 5, paddingBottom: 5}}/>
                    </div>
                } </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link onClick={onNewReviewClicked}> <img style={{width: 27}} src="http://localhost:3006/add.svg"/> </Nav.Link>
                    </Nav>
                    {/*<SignOutButton />*/}
                </Navbar.Collapse>
            </Navbar>
            <Divider/>
        </div>
    );
}
//style={{background: "#1CB0F6"}}

export default withRouter(Header);
