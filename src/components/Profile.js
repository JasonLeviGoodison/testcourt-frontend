
import React, { Component } from "react";

import withAuthorization from "./withAuthorization";
import { db } from "../firebase";

class Profile extends Component {
  state = {
    users: null,
    username: "",
    loading: true
  };

  componentDidMount() {
    const { loggedUser } = this.props;
    db.doGetAUser(loggedUser.uid).then(res => {
      this.setState({
        username: res.val().username,
        loading: false
      });
    });
  }

  render() {
    const { users, username, loading } = this.state;
    return (
      <div>
        <h1>Home</h1>
        {!loading && <p className="centered">Hello {username}!</p>}

        <p style={{ marginTop: "80px" }}>
          NOTE: This page is only accessible by signed in users.
        </p>
      </div>
    );
  }
}


const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Profile);