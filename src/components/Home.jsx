import React from 'react';
import DocsList from './DocsList';
import withAuthorization from '../auth/withAuthorization';
import ReviewPreview from './ReviewPreview';

function Home() {
  return (
    <>
      <>
        <DocsList />
        {' '}
        <ReviewPreview />
      </>
    </>
  );
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);
