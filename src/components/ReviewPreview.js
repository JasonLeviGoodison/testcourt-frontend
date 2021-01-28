import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import * as newRequestApi from '../api/newRequestApi';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button'
import Divider from '@material-ui/core/Divider';
import { setInReview } from '../redux/actions';
import Checkbox from '@material-ui/core/Checkbox';
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { getCurDocMeta, getPacTypeCheckList, getCurDoc } from "../redux/selectors";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Status from "./Status/Status";
import * as routes from '../routes/routes';
import { withRouter } from "react-router-dom";
import Pill from "./Status/Pill";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
}));

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
//;
 
function ReviewPreview(props) {
    const classes = useStyles();
    const curDoc = props.curDoc;
    const { history } = props;
    const [ keyToUrl, setKeyToUrl ] = useState({}); // dict key: signedUrl

    if (Object.entries(curDoc) != 0) {
        for (var i = 0; i < curDoc.keys.length; i++) {
            let key = curDoc.keys[i];
            if (!(key in keyToUrl)) {
                newRequestApi.GetViewObjectSignedUrl(key).then(({url}) => {
                    setKeyToUrl({... keyToUrl, [key]: url });
                });
            }
        }
    }

    const handleButtonClick = () => {
        //props.setInReview(true);
        history.push(routes.REVIEW + "/" + curDoc.id);
    }

    if (Object.entries(curDoc) == 0) {
        return <p style={{margin: "auto"}}> Please select a package to review </p>
    }
  
  return (
    <div style={{'flex': '1', overflowY: 'scroll', backgroundColor: '#eeeee', padding: 85, paddingTop: 20}}>
        <Card style={{ width: '100%' }}>
            <Card.Body style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}>
                <Card.Title>Package Preview</Card.Title>
                <Button variant="primary" onClick={handleButtonClick}>
                    {curDoc.status === Status.WAITING ? "Start Review" : "Re-review"}
                </Button>
            </Card.Body>
            <div style={{display: 'flex', borderTopStyle: 'solid', borderBlockColor: 'inherit'}}>
            <ListGroup className="list-group-flush" style={{textAlign: "left", flex: 1, borderRightStyle: 'inset'}}>
                <ListGroupItem style={{textAlign: 'center'}}><b>Package info</b></ListGroupItem>
                <ListGroupItem><b>Client Name</b>: {curDoc.name}</ListGroupItem>
                <ListGroupItem><b>Case #</b>: {curDoc.case_number}</ListGroupItem>
                <ListGroupItem><b>Due Date</b>: {new Date(curDoc.due_date).toLocaleDateString("en-US")}</ListGroupItem>
                <ListGroupItem><b>Package Type</b>: {curDoc.package_types.join(', ')}</ListGroupItem>
                <ListGroupItem> <b>Description</b>: {curDoc.description}</ListGroupItem>
            </ListGroup>
            {/*TODO: Add a posted by and status field to the reviews*/}
            <ListGroup className="list-group-flush" style={{textAlign: "left", flex: 1}}>
                <ListGroupItem style={{textAlign: 'center'}}><b>Poster info</b></ListGroupItem>
                <ListGroupItem> <b>Status</b>: <Pill key={curDoc.status + curDoc.id} status={curDoc.status}/> </ListGroupItem>
                <ListGroupItem><b>Posted By</b>: {curDoc.posted_by}</ListGroupItem>
                <ListGroupItem><b>Created</b>: {new Date(curDoc.created_at).toLocaleDateString("en-US")}</ListGroupItem>
                <ListGroupItem> <b>Notes</b>: {curDoc.notes}</ListGroupItem>
            </ListGroup>
            </div>
            <Divider/>
            </Card>
            <Card style={{ width: '100%', marginTop: 10 }}>
                <ListGroup className="list-group-flush" style={{textAlign: "left", flex: 1}}>
                    <ListGroupItem ><b>Files</b></ListGroupItem>
                    {curDoc.keys.map((key) => {
                        return (
                            <ListGroupItem style={{
                                textAlign: "left",
                                flexDirection: "row",
                                display: 'flex',
                                justifyContent: "space-between"}}> <p>{key.substring(key.lastIndexOf("\/") + 1)}</p>
                                <a
                                    variant="secondary"
                                    href={keyToUrl[key] ? keyToUrl[key] : "#"}
                                    download>
                                    Download
                                </a>
                            </ListGroupItem>);
                    })}
                </ListGroup>
            </Card>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        curDoc: getCurDocMeta(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setInReview: (value) => dispatch(setInReview(value))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ReviewPreview))