

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { useEffect, useState } from "react";
import { getCurDocMeta } from "../redux/selectors";
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
}));

 
function CheckList(props) {
  const classes = useStyles();
  const [checks, setChecks] = useState([])

  const handleChange = (index) => {
      return (event) => {
        let beforeChecks = [...checks];
        beforeChecks[index] = event.target.checked
        setChecks(beforeChecks);
    }
};

  if (!props.curDoc) {
    return <p> Please Select a document to review </p>
  }
  

  const docs = [
    { uri:  props.curDoc.url},
    //{ uri: require("./example-files/pdf.pdf") }, // Local File
  ];
  
  return (
    <div style={{'flex': '1', 'height': '100vh'}}>
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Jasons Request For Approval</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush" style={{textAlign: "left"}}>
                <ListGroupItem> <b>Description</b>: This is the document that ashley asked for for Jasons case</ListGroupItem>
                <ListGroupItem><b>Name</b>: Jason Goodison</ListGroupItem>
                <ListGroupItem><b>Case #</b>: 10293261</ListGroupItem>
                <ListGroupItem><b>Due Date</b>: 10/10/2021</ListGroupItem>
                <ListGroupItem><b>Doc type</b>: Will</ListGroupItem>
                <ListGroupItem><b>Required Approvals</b>: <br/>
                <div style={{textAlign: "center"}}>
                    Ashley ✅ <br/>
                    Steve ⌛ <br/>
                    Jason ❌
                </div>
                </ListGroupItem>
            </ListGroup>
        </Card>
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Check List</Card.Title>
            </Card.Body>
            <FormControl required error={true} component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={checks[0]} onChange={handleChange(0)} name="gilad" />}
                        label="Names are correct"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={checks[1]} onChange={handleChange(1)} name="jason" />}
                        label="Section 8 is crossed out"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={checks[2]} onChange={handleChange(2)} name="antoine" />}
                        label="Page 2 is on Yellow stock"
                    />
                </FormGroup>
            </FormControl>
            <Card.Body>
                <Card.Link href="#">Approve</Card.Link>
                <Card.Link href="#">Reject</Card.Link>
            </Card.Body>
        </Card>
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
)(CheckList)