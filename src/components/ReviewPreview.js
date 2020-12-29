

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button'
import Divider from '@material-ui/core/Divider';
import { setInReview } from '../redux/actions';
import Checkbox from '@material-ui/core/Checkbox';
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { getCurDocMeta, getDocTypeCheckList, getCurDoc } from "../redux/selectors";
import { connect } from 'react-redux';

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

    const handleButtonClick = () => {
        props.setInReview(true);
    }

    if (!curDoc) {
        return <p style={{margin: "auto"}}> Please select a document to review </p>
      }
  
  return (
    <div style={{'flex': '1', 'height': '100vh', maxHeight: "100vh", overflowY: 'scroll', backgroundColor: '#eeeee', padding: 85, paddingTop: 20}}>
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Package Preview</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush" style={{textAlign: "left"}}>
                <ListGroupItem><b>Name</b>: {curDoc.name}</ListGroupItem>
                <ListGroupItem><b>Case #</b>: {curDoc.case_number}</ListGroupItem>
                <ListGroupItem><b>Due Date</b>: {curDoc.dueDate}</ListGroupItem>
                <ListGroupItem><b>Package Type</b>: {curDoc.doc_types.join(', ')}</ListGroupItem>
                <ListGroupItem> <b>Description</b>: {curDoc.description}</ListGroupItem>
                <ListGroupItem> <b>Notes</b>: {curDoc.notes}</ListGroupItem>
            </ListGroup>
            <Divider/>
            <Card.Body>
                <Card.Title>Start Review</Card.Title>
            </Card.Body>
            We keep track of how long it takes to review so you can dock-it your time
            <Card.Body>
                <Button variant="primary" onClick={handleButtonClick}>Start</Button>
            </Card.Body>
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
)(ReviewPreview)