import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap'
import { useEffect, useState } from "react";
import { getCurDocMeta } from "../redux/selectors";
import { connect } from 'react-redux';
 
function DocumentViewer(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  }, [props.curDoc]);

  var docs = [];
  for (var i = 0; i < props.curDoc.urls.length; i++) {
    docs.push({
      uri: props.curDoc.urls[i]
    });
  }
  
  return (
    <div style={{'flex': '3', 'height': '100vh'}}>
      <DocViewer
      style={{'height': '100vh'}} pluginRenderers={DocViewerRenderers} documents={docs} key={count}/>
    </div>);
}

const mapStateToProps = (state) => {
  return {
    curDoc: getCurDocMeta(state)
  }
}

export default connect(
  mapStateToProps,
  null
)(DocumentViewer)