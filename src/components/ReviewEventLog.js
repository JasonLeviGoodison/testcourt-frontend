import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CommentsBlock from 'simple-react-comments';
import { getReviewEventLog } from '../redux/selectors';
import { addCommentToReview, fetchEventLogForId } from '../redux/thunks';
import { batchReviewEventToDigestableComment } from '../utils';
import { Card } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';

function ReviewEventLog(props) {
  const comments = batchReviewEventToDigestableComment(props.getEventLog(props.id));
  const id = props.id;

  useEffect(() => {
    props.fetchReviewEventLog(id)
  }, [])

  return (
    <Card style={{ width: '100%', overflow: 'scroll', paddingLeft: 10 }}>
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>Comments</Card.Title>
      </Card.Body>
      <CommentsBlock
        comments={comments}
        isLoggedIn={true}
        reactRouter={false}
        onSubmit={text => {
          if (text.length > 0) {
            props.addComment(id, text);
          }
        }}
      />
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    getEventLog: (reviewId) => getReviewEventLog(state, reviewId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (reviewId, comment) => dispatch(addCommentToReview(reviewId, comment)),
    fetchReviewEventLog: (reviewId) => dispatch(fetchEventLogForId(reviewId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEventLog);