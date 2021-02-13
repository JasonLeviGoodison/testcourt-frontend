import React from 'react';
import { Card } from 'react-bootstrap';

function WaitingVerify() {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}
      >
        <Card.Title style={{ width: '100%', textAlign: 'center' }}>
          Waiting to be verified. Ask your Firm&apos;s admin to check their email
        </Card.Title>
        <Card.Body style={{ width: '100%', textAlign: 'center' }}>
          The admin is most likely the person that set up the account
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

export default WaitingVerify;
