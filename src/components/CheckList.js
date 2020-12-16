

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from 'react-bootstrap/Button'
import Divider from '@material-ui/core/Divider';
import { fetchCheckListForDocType } from '../redux/actions';
import Checkbox from '@material-ui/core/Checkbox';
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { getCurDocMeta, getDocTypeCheckList } from "../redux/selectors";
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
 
function CheckList(props) {
    const defautPopupMsg = "Are you sure you want to approve these files?";
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);
    const curDoc = props.curDoc;
    const [checklist, setCheckList] = useState([]);
    const [popupMsg, setPopUpMsg] = useState(defautPopupMsg);

    function getChecklistFromList(list) {
    return list.map((label) => ({
            label,
            checked: false
        }));
    }
  
    useEffect(() => {
        if (curDoc && curDoc.docType && checklist.length == 0) {
            props.fetchCheckListForDocType(curDoc.docType)
        }
    }, [curDoc])

    useEffect(() => {
        if (props.curDoc && props.curDoc.docType) {
        setCheckList(getChecklistFromList(props.checkList(props.curDoc.docType)))
        }
    }, [props.checkList])

    const handleChange = (index) => {
        return (event) => {
            var beforecheck = [...checklist];
            beforecheck[index].checked = !beforecheck[index].checked;
            setCheckList(beforecheck);
        }
    };
  
    const allBoxesChecked = () => {
        for (var i = 0; i < checklist.length; i++) {
            if (!checklist[i].checked) {
                return false;
            }
        }
        return true;
    }

    const handleButtonClick = (action) => {
        return () => {
            if (action == "approve") {
                var allChecked = allBoxesChecked();
                if (!allChecked) {setPopUpMsg("Please check off all items on the checklist") }
                else {setPopUpMsg(defautPopupMsg) }
            } else { // action reject
                setPopUpMsg("Are you sure you want to reject this review");
            }
            setShowModal(true);
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }


    if (!curDoc) {
        return <p></p>
    }

  const docs = [
    { uri:  props.curDoc.url},
    //{ uri: require("./example-files/pdf.pdf") }, // Local File
  ];
  
  return (
    <div style={{'flex': '1', 'height': '100vh', maxHeight: "100vh", overflowY: 'scroll', backgroundColor: 'aliceblue'}}>
        <Card border="dark" style={{ width: '100%', marginTop: 20 }}>
            <Card.Body>
                <Card.Title>Doc Review Information</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush" style={{textAlign: "left"}}>
                <ListGroupItem> <b>Description</b>: {curDoc.description}</ListGroupItem>
                <ListGroupItem><b>Name</b>: {curDoc.clientName}</ListGroupItem>
                <ListGroupItem><b>Case #</b>: {curDoc.caseNumber}</ListGroupItem>
                <ListGroupItem><b>Due Date</b>: {curDoc.dueDate}</ListGroupItem>
                <ListGroupItem><b>Doc type</b>: {curDoc.docType}</ListGroupItem>
            </ListGroup>
        </Card>
        <Card border="dark" style={{ width: '100%', marginTop: 10 }}>
            <Card.Body>
                <Card.Title>Approval</Card.Title>
            </Card.Body>
            <Divider/>
            <div style={{marginTop: '10px'}}>Check this list before approving:</div>
            <FormControl
                required error={true}
                component="fieldset"
                className={classes.formControl}
                style={{maxHeight: '250px', overflowY: "scroll"}} >
            <FormGroup>
                {
                    checklist.map((x, index) => {
                        return (<FormControlLabel
                            key={index}
                            control={<Checkbox key={index} checked={x.checked} onChange={handleChange(index)} name="gilad" />}
                            label={x.label}/>);
                    })
                }
                </FormGroup>
            </FormControl>
            <Card.Body>
                <Card.Link href="#" onClick={handleButtonClick('approve')}>Approve</Card.Link>
                <Card.Link href="#" onClick={handleButtonClick('reject')}>Reject</Card.Link>
            </Card.Body>
        </Card>
        {
        <Modal isOpen={showModal} style={customStyles} contentLabel="Example Modal">
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>{popupMsg}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <Button variant="primary" style={{ "marginRight": "3px"}}>Confirm</Button>
                    <Button variant="outline-secondary" onClick={closeModal}>Close</Button>
                </Card.Body>
            </Card>
        </Modal>
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        curDoc: getCurDocMeta(state),
        checkList: (docType) => getDocTypeCheckList(state, docType)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCheckListForDocType: (docType) => dispatch(fetchCheckListForDocType(docType))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckList)