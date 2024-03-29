/*
    Code largely taken from psatler/react-firebase-authentication on Github
*/

import React, { Component } from 'react';
import {
  Form, FormGroup, Input, Alert,
} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { auth } from '../firebase';
import * as routes from '../routes/routes';

const SignInPage = ({ history }) => (
  <div className="div-flex">
    <div className="marginTop60">
      <h1>Sign In</h1>
      <SignInForm history={history} />
    </div>
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  showingAlert: false,
};

class SignInForm extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
    this.timer = this.timer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch((error) => {
        this.setState(byPropKey('error', error));
        this.timer(); // defined below
      });

    event.preventDefault();
  }

  timer() {
    this.setState({
      showingAlert: true,
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false,
      });
    }, 4000);
  }

  render() {
    const {
      email, password, error, showingAlert,
    } = this.state;

    const isInvalid = password === '' || email === '';

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
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              value={email}
              onChange={(event) => this.setState(byPropKey('email', event.target.value))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              value={password}
              onChange={(event) => this.setState(byPropKey('password', event.target.value))}
            />
          </FormGroup>

          <div className="text-center">
            <Button disabled={isInvalid} type="submit">
              Sign In
            </Button>
          </div>
        </Form>

        <hr />
      </div>
    );
  }
}

SignInPage.propTypes = {
  history: PropTypes.object.isRequired,
};

SignInForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SignInPage);

export { SignInForm };
