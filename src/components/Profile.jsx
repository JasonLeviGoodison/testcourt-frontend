import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withAuthorization from '../auth/withAuthorization';
import { db } from '../firebase';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { loggedUser } = this.props;
    db.doGetAUser(loggedUser.uid).then((res) => {
      this.setState({
        username: res.val().username,
        loading: false,
      });
    });
  }

  render() {
    const { username, loading } = this.state;
    return (
      <div>
        <h1>Home</h1>
        {!loading && (
        <p className="centered">
          Hello
          {' '}
          {username}
          !
        </p>
        )}

        <p style={{ marginTop: '80px' }}>
          NOTE: This page is only accessible by signed in users.
        </p>
      </div>
    );
  }
}

Profile.propTypes = {
  loggedUser: PropTypes.object.isRequired,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Profile);
