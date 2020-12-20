/*
    Code largely taken from psatler/react-firebase-authentication on Github
*/

import React from "react";
import { firebase } from "../../firebase";

import AuthUserContext from "./AuthUserContext"; //using provider's context api

const Authentication = Component => {
  class Authentication extends React.Component {
    state = {
      authUser: null
    };

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      });
    }

    render() {
      const { authUser } = this.state;
      console.log("withAuthentication file authUser", authUser);
      return (
        //   passing down the authUser value, so other components can consume it
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return Authentication;
};

export default Authentication;
