/*
    Code largely taken from psatler/react-firebase-authentication on Github
*/

import React, { Component } from 'react';
import {
  Form, FormGroup, Input, Alert,
} from 'reactstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from 'react-bootstrap/Button';
import Switch from 'react-switch';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import * as routes from '../routes/routes';
import * as accountApi from '../api/accountApi';

const SignUpPage = ({ history }) => (
  <div className="div-flex">
    <div className="marginTop60">
      <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
      <SignUpForm history={history} />
    </div>
  </div>
);

SignUpPage.propTypes = {
  history: PropTypes.object.isRequired,
};

// ################### Sign Up Form ###################
const INITIAL_STATE = {
  firstName: '',
  lastname: '',
  email: '',
  company: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  showingAlert: false,
  isNewCompany: false,
};

// A Higher order function with prop name as key and the value to be assigned to
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      ...INITIAL_STATE,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const {
      firstName, lastName, email, passwordOne, company, isNewCompany,
    } = this.state;
    const { history } = this.props;
    accountApi.signUp(firstName, lastName, company, email, passwordOne, isNewCompany)
      .then(() => {
        this.setState({
          ...INITIAL_STATE,
        });
        if (!isNewCompany) {
          history.push(routes.WAITING_VERIFY);
        } else {
          history.push(routes.HOME);
        }
      })
      .catch((error) => {
        this.setState(byPropKey('error', error));
        this.timer(); // show alert message for some seconds
      });

    event.preventDefault(); // prevents refreshing
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
      firstName,
      lastName,
      email,
      company,
      passwordOne,
      passwordTwo,
      error,
      showingAlert,
      isNewCompany,
    } = this.state;
    // a boolen to perform validation
    const isInvalid = (passwordOne !== passwordTwo
      || passwordOne === ''
      || email === ''
      || firstName === ''
      || lastName === '')
      || company === '';

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
              type="first"
              name="first"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => this.setState(byPropKey('firstName', e.target.value))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="second"
              name="last"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => this.setState(byPropKey('lastName', e.target.value))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              value={email}
              onChange={(e) => this.setState(byPropKey('email', e.target.value))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="examplePassword1"
              placeholder="Password"
              value={passwordOne}
              onChange={(e) => this.setState(byPropKey('passwordOne', e.target.value))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="examplePassword2"
              placeholder="Confirm Password"
              value={passwordTwo}
              onChange={(e) => this.setState(byPropKey('passwordTwo', e.target.value))}
            />
          </FormGroup>
          <FormGroup style={{ textAlign: 'center' }}>
            {!isNewCompany ? 'Join a firm' : 'Create a firm'}
            <br />
            <Switch
              onChange={(checked) => {
                this.setState(byPropKey('company', ''));
                this.setState(byPropKey('isNewCompany', !checked));
              }}
              checked={!isNewCompany}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
              id="material-switch"
            />
            <br />
            {isNewCompany
              ? (
                <TextField
                  style={{ width: '100%' }}
                  onChange={(e) => this.setState(byPropKey('company', e.target.value))}
                  value={company}
                  placeholder="Firm Name"
                />
              )
              : (
                <Dropdown
                  onChange={(option) => this.setState(byPropKey('company', option.value))}
                  options={['Legal Focus']}
                  placeholder="Choose Firm"
                />
              )}

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

SignUpForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export { SignUpForm };
export default withRouter(SignUpPage);
