/*
    Code largely taken from psatler/react-firebase-authentication on Github
*/

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, Input, Alert } from "reactstrap";
import Button from 'react-bootstrap/Button'

import * as routes from "../routes/routes";
import { auth, db } from "../firebase";

const SignUpPage = ({ history }) => (
    <div className="div-flex">
        <div className="marginTop60">
        <h1 className="centered">Sign Up</h1>
        <SignUpForm history={history} />
        </div>
    </div>
);

//################### Sign Up Form ###################
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
  showingAlert: false
};

//A Higher order function with prop name as key and the value to be assigned to
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  //defining state
  state = {
    ...INITIAL_STATE
  };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    const { history } = this.props;
    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      //it the above functions resolves, reset the state to its initial state values, otherwise, set the error object
      .then(authUser => {
        //creating a user in the database after the sign up through Firebase auth API
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({
              ...INITIAL_STATE
            });
            history.push(routes.HOME); //redirects to Home Page
          })
          .catch(error => {
            this.setState(byPropKey("error", error));
            this.timer(); //show alert message for some seconds
          });
      })
      .catch(err => {
        this.setState(byPropKey("error", err));
        this.timer(); //show alert message for some seconds
      });

    event.preventDefault(); //prevents refreshing
  };

  timer = () => {
    this.setState({
      showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 4000);
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      showingAlert
    } = this.state;
    //a boolen to perform validation
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <div>
        {showingAlert && (
          <Alert color="danger" onLoad={this.timer}>
            {error.message}
          </Alert>
        )}
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Input
              type="username"
              name="username"
              id="userName"
              placeholder="First and Last Name"
              value={username}
              onChange={e =>
                this.setState(byPropKey("username", e.target.value))
              }
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              value={email}
              onChange={e => this.setState(byPropKey("email", e.target.value))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="examplePassword1"
              placeholder="Password"
              value={passwordOne}
              onChange={e =>
                this.setState(byPropKey("passwordOne", e.target.value))
              }
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="examplePassword2"
              placeholder="Confirm Password"
              value={passwordTwo}
              onChange={e =>
                this.setState(byPropKey("passwordTwo", e.target.value))
              }
            />
          </FormGroup>

          <div className="text-center">
            <Button disabled={isInvalid} type="submit">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

//################### Sign Up Link ###################
//used in the sign in when the user don't have an account registered yet
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

//exports
export default withRouter(SignUpPage); //using a HoC to get access to history
export { SignUpForm, SignUpLink };
