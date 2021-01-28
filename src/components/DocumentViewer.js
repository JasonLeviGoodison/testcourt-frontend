import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap'
import { fetchPackageReviewById } from '../redux/thunks';
import * as newRequestApi from '../api/newRequestApi';
import { getReview, getVerdictChanged } from "../redux/selectors";
import Status from "../components/Status/Status";
import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getFileType } from '../utils';
import Stopwatch from "./Stopwatch";

function DocumentViewer(props) {
  const { curReview } = props;
  const [ keyToUrl, setKeyToUrl ] = useState({}); // dict key: signedUrl
  const verdictChanged = props.verdictChanged;

  useEffect(() => {
    props.fetchReviewById(props.id)
  }, []);

  if (Object.entries(curReview) != 0) {
    var docs = [];
    for (var i = 0; i < curReview.keys.length; i++) {
      let key = curReview.keys[i];
      if (key in keyToUrl) {
        docs.push({
          uri: keyToUrl[key],
          fileType: getFileType(key)
        });
      } else {
        newRequestApi.GetViewObjectSignedUrl(key).then(({url}) => {
          setKeyToUrl({... keyToUrl, [key]: url });
        });
      }
    }
  } else {
    return "Loading"
  }


  return (
    <div style={{'flex': '3'}}>
      <Stopwatch verdictChanged /> // if the verdict changed lets save the thing
      {
        !verdictChanged ?
          <DocViewer
            style={{height: '100%' }}
            pluginRenderers={DocViewerRenderers}
            documents={docs}
          /> : null
      }
    </div>);
}

const mapStateToProps = (state) => {
  return {
    curReview: getReview(state),
    verdictChanged: getVerdictChanged(state)
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