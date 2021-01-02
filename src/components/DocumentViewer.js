import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap'
import { fetchPackageReviewById } from '../redux/thunks';
import { useEffect, useState } from "react";
import { getReview } from "../redux/selectors";
import Stopwatch from "./Stopwatch";
import { connect } from 'react-redux';
 
function DocumentViewer(props) {
  const { curReview } = props;

  console.log("id", props.id, " curReview", curReview)

  useEffect(() => {
    props.fetchReviewById(props.id)
  }, []);

  if (Object.entries(curReview) != 0) {
    var docs = [];
    for (var i = 0; i < curReview.urls.length; i++) {
      docs.push({
        uri: curReview.urls[i]
      });
    }
  } else {
    return "Loading"
  }

  return (
    <div style={{'flex': '3', 'height': '100vh'}}>
      <Stopwatch/>
      <DocViewer
        style={{'height': '100vh'}}
        pluginRenderers={DocViewerRenderers}
        documents={docs}
      />
    </div>);
}

const mapStateToProps = (state) => {
  return {
    curReview: getReview(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviewById: (id) => dispatch(fetchPackageReviewById(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentViewer)