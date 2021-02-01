/* eslint-disable react/jsx-props-no-spreading */
/* Reason: Not my code */
/*
    Code largely taken from psatler/react-firebase-authentication on Github
*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase';
import * as routes from '../routes/routes';

const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      const { history } = this.props;
      firebase.auth.onAuthStateChanged((authUser) => {
        if (!authCondition(authUser)) {
          // if the authorization fails, redirects to sign in page
          history.push(routes.LOG_IN);
        }
      });
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {/* it either renders the passed component or not */}
          {(authUser) => (authUser ? (
            <Component {...this.props} loggedUser={authUser} />
          ) : null)}
        </AuthUserContext.Consumer>
      );
    }
  }

  WithAuthorization.propTypes = {
    history: PropTypes.object.isRequired,
  };

  return withRouter(WithAuthorization); // using withRouter so we have access to history props
};

export default withAuthorization;
