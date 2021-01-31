import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import withAuthorization from "../auth/withAuthorization";
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Button } from "reactstrap";
import { auth } from "../firebase";

function Account(props) {

  useEffect(() => {
  }, []);

  return (
    <div className="Card" style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Profile</Card.Title>
        </Card.Body>
        <div style={{ display: 'flex', borderTopStyle: 'solid', borderBlockColor: 'inherit' }}>
          <ListGroup className="list-group-flush" style={{ textAlign: "left", flex: 1, borderRightStyle: 'inset' }}>
            <ListGroupItem><b>Email</b>: {props.loggedUser.email}</ListGroupItem>
          </ListGroup>
        </div>
      </Card>
      <Button style={{ width: 100, marginLeft: 'auto', marginRight: 'auto' }} color="info" onClick={auth.doSignOut}>
        Sign Out
            </Button>
    </div>);
}

const authCondition = authUser => !!authUser;
export default withAuthorization(authCondition)(Account)