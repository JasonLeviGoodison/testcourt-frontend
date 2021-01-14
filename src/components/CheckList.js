import { getReview, getPacTypeCheckLists, getCheckListsState } from "../redux/selectors";
import { Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import { fetchPackageReviewById, fetchChecklistForPacType, submitVerdict } from '../redux/thunks';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from 'react-bootstrap/Button'
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import { useEffect, useState } from "react";
import Status from "./Status/Status";
import Modal from 'react-modal';
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
 
function CheckList(props) {
    const {
        curReview,
        checklists
    } = props;
    const defautPopupMsg = "Are you sure you want to approve this package?";
    const classes = useStyles();
    const [buttonList, setButtonList] = useState([]); 
    const [showModal, setShowModal] = useState(false);
    const [closeChecklist, setCloseChecklist] = useState(false);
    const [submitVerdict, setSubmitVerdict] = useState(Status.APPROVED);
    const [popupMsg, setPopUpMsg] = useState(defautPopupMsg);

    function getChecklistFromList(list) {
        return list.map((label) => ({label, checked: false}));
    }
  
    useEffect(() => {
        if (Object.entries(curReview).length > 0) {
            curReview.package_types.forEach(pacType => {
                if (pacType) props.fetchChecklist(pacType)
            });
        }
    }, [curReview]);

    useEffect(() => {
        if (curReview.package_types) {
            setButtonList(getChecklistFromList(checklists(curReview.package_types)))
        }

    }, [props.checkListsState]);

    if (Object.entries(curReview) == 0 || checklists.length == 0) {
        return <p>Loading</p>
    }

    const handleChange = (index) => {
        return (event) => {
            var copy = [...buttonList];
            copy[index].checked = !copy[index].checked;
            setButtonList(copy);
        }
    };
  
    const allBoxesChecked = () => {
        for (var i = 0; i < buttonList.length; i++) {
            if (!buttonList[i].checked) {
                return false;
            }
        }
        return true;
    }

    const handleButtonClick = (status) => {
        return () => {
            if (status == Status.APPROVED) {
                var allChecked = allBoxesChecked();
                if (!allChecked) {setPopUpMsg("Please check off all items on the checklist");setSubmitVerdict('block')}
                else {setPopUpMsg(defautPopupMsg) }
            } else { // status reject
                setPopUpMsg("Are you sure you want to reject this review");
                setSubmitVerdict(status);
            }
            setShowModal(true);
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const submitWithVerdictRequest = () => {
        let status = submitVerdict;
        closeModal();
        if (status == 'block') { return; }
        props.submitVerdictRequest(props.id, status);
        setCloseChecklist(true);
    }

  return (
      !closeChecklist ?
        <div style={{'flex': '1', overflowY: 'scroll', backgroundColor: '#eeeee'}}>
            <Card style={{ width: '100%'}}>
                <Card.Body>
                    <Card.Title>Approval</Card.Title>
                </Card.Body>
                <Divider/>
                <div style={{marginTop: '10px'}}>Check this list before approving:</div>
                <FormControl
                    required error={true}
                    component="fieldset"
                    className={classes.formControl}
                    style={{overflowY: "scroll", paddingLeft: 10, paddingRight: 10}} >
                <FormGroup>
                    {
                        buttonList.map((x, index) => {
                            return (<FormControlLabel
                                style={{textAlign: "left"}}
                                key={index}
                                control={<Checkbox key={index} checked={x.checked} onChange={handleChange(index)} name="gilad" />}
                                label={x.label}/>);
                        })
                    }
                    </FormGroup>
                </FormControl>
                <Card.Body>
                    <Button variant="success" style={{ "marginRight": 8}} onClick={handleButtonClick(Status.APPROVED)}>Approve</Button>
                    <Button variant="danger" onClick={handleButtonClick(Status.REJECTED)}>Reject</Button>
                </Card.Body>
            </Card>
            {
            <Modal isOpen={showModal} style={customStyles} contentLabel="Confirmation modal" ariaHideApp={false}>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>{popupMsg}</Card.Title>
                    </Card.Body>
                    <Card.Body>
                        <Button onClick={submitWithVerdictRequest} variant="primary" style={{ "marginRight": "3px"}}>Confirm</Button>
                        <Button variant="outline-secondary" onClick={closeModal}>Close</Button>
                    </Card.Body>
                </Card>
            </Modal>
            }
        </div> : null);
}

const mapStateToProps = (state) => {
    return {
        curReview: getReview(state),
        checklists: (package_types) => getPacTypeCheckLists(state, package_types),
        checkListsState: getCheckListsState(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviewById: (id) => dispatch(fetchPackageReviewById(id)),
        fetchChecklist: (pacType) => dispatch(fetchChecklistForPacType(pacType)),
        submitVerdictRequest: (id, status) => dispatch(submitVerdict(id, status))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckList)