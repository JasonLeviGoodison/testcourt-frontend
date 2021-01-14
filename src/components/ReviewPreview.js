import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'
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

    const handleButtonClick = () => {
        //props.setInReview(true);
        history.push(routes.REVIEW + "/" + curDoc.id);
    }

    if (Object.entries(curDoc) == 0) {
        return <p style={{margin: "auto"}}> Please select a package to review </p>
    }
  
  return (
    <div style={{'flex': '1', 'height': '100vh', maxHeight: "100vh", overflowY: 'scroll', backgroundColor: '#eeeee', padding: 85, paddingTop: 20}}>
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Package Preview</Card.Title>
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
            <Card.Body>
                <Button variant="primary" onClick={handleButtonClick}>
                    Start Review
                </Button>
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
)(withRouter(ReviewPreview))