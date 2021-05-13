import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CommentsBlock from 'simple-react-comments';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getReviewEventLog } from '../redux/selectors';
import { addCommentToReview, fetchEventLogForId } from '../redux/thunks';
import { batchReviewEventToDigestableComment } from '../utils';

function ReviewEventLog(props) {
  const { id, getEventLog } = props;
  const comments = batchReviewEventToDigestableComment(getEventLog(id));

  useEffect(() => {
    props.fetchReviewEventLog(id);
  }, [id]);

  return (
    <Card style={{ width: '100%', overflow: 'scroll', paddingLeft: 10 }}>
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>Comments</Card.Title>
      </Card.Body>
      <CommentsBlock
        comments={comments}
        isLoggedIn
        reactRouter={false}
        onSubmit={(text) => {
          if (text.length > 0) {
            props.addComment(id, text);
          }
        }}
      />
    </Card>
  );
}

const mapStateToProps = (state) => ({
  getEventLog: (reviewId) => getReviewEventLog(state, reviewId),
});

const mapDispatchToProps = (dispatch) => ({
  addComment: (reviewId, comment) => dispatch(addCommentToReview(reviewId, comment)),
  fetchReviewEventLog: (reviewId) => dispatch(fetchEventLogForId(reviewId)),
});

ReviewEventLog.propTypes = {
  getEventLog: PropTypes.func.isRequired,
  fetchReviewEventLog: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEventLog);
