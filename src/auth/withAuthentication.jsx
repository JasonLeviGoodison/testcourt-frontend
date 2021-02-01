/* eslint-disable react/jsx-props-no-spreading */
/* Reason: This is not my code */

/*
    Code largely taken from psatler/react-firebase-authentication on Github
*/

import React from 'react';
import { firebase } from '../firebase';
import AuthUserContext from './AuthUserContext'; // using provider's context api

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor() {
      super();
      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged((authUser) => {
        // eslint-disable-next-line no-unused-expressions
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }

    render() {
      const { authUser } = this.state;
      return (
        // passing down the authUser value, so other components can consume it
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return WithAuthentication;
};

export default withAuthentication;
