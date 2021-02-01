import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import { Button } from 'reactstrap';
import withAuthorization from '../auth/withAuthorization';
import { auth } from '../firebase';

function Account(props) {
  const { loggedUser } = props;
  useEffect(() => {
  }, []);

  return (
    <div className="Card" style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Profile</Card.Title>
        </Card.Body>
        <div style={{ display: 'flex', borderTopStyle: 'solid', borderBlockColor: 'inherit' }}>
          <ListGroup className="list-group-flush" style={{ textAlign: 'left', flex: 1, borderRightStyle: 'inset' }}>
            <ListGroupItem>
              <b>Email</b>
              :
              {' '}
              {loggedUser.email}
            </ListGroupItem>
          </ListGroup>
        </div>
      </Card>
      <Button style={{ width: 100, marginLeft: 'auto', marginRight: 'auto' }} color="info" onClick={auth.doSignOut}>
        Sign Out
      </Button>
    </div>
  );
}

Account.propTypes = {
  loggedUser: PropTypes.object.isRequired,
};

const authCondition = (authUser) => !!authUser;
export default withAuthorization(authCondition)(Account);
