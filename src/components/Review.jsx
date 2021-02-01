import React from 'react';
import PropTypes from 'prop-types';
import CheckList from './CheckList';
import DocumentViewer from './DocumentViewer';
import withAuthorization from '../auth/withAuthorization';
import ReviewEventLog from './ReviewEventLog';

function Review(props) {
  const
    {
      match: {
        params: {
          id,
        },
      },
    } = props;
  return (
    <>
      <DocumentViewer id={id} />
      <div style={{ flex: '2', overflow: 'scroll' }}>
        <CheckList id={id} />
        <ReviewEventLog id={id} />
      </div>
    </>
  );
}

Review.propTypes = {
  match: PropTypes.object.isRequired,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Review);
