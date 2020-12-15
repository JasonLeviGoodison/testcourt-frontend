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

  console.log(count)

  if (!props.curDoc) {
    return <p style={{margin: "auto"}}> Please select a document to review </p>
  }

  const docs = [
    { uri:  props.curDoc.url},
    //{ uri: require("./example-files/pdf.pdf") }, // Local File
  ];
  
  return (
    <div style={{'flex': '3', 'height': '100vh'}}>
      <DocViewer style={{'height': '100vh'}} pluginRenderers={DocViewerRenderers} documents={docs} key={count}/>
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