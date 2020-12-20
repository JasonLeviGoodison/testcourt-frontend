import React, { useState, useReducer } from "react";
import "../App.css";
import Upload from "./upload/Upload";
import { makeStyles } from '@material-ui/core/styles';
import { setNewReviewField } from '../redux/actions';
import { getNewReviewFields } from '../redux/selectors';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
    },
}));


function NewReview(props) {
    console.log("New review fields:", props.newReviewFields);
    const { name } = props.newReviewFields;
    const [submitting, setSubmitting] = useState(false);
    const classes = useStyles();

    const handleChange = event => {
        props.setNewReviewField(event.target.name, event.target.value);
    }

    return (
        <div className="Card" style={{display: 'flex', flexDirection: 'column', margin: 'auto'}}>
            <form  style={{ margin: 'auto', textAlign: 'left'}}>
                <h2 style={{textAlign: 'center', paddingBottom: 25}}>New Review</h2>
                <fieldset style={{display: 'flex', flexDirection: 'column'}}>
                    <label>
                        <p>Client Name</p>
                        <input name="name" onChange={handleChange}/>
                    </label>
                    <label>
                        <p>Case #</p>
                        <input name="casenumber" onChange={handleChange}/>
                    </label>
                    <label>
                        <p>Doc Types</p>
                        <input name="doctypes" onChange={handleChange}/>
                    </label>
                    <label>
                        <p>Brief Description</p>
                        <textarea name="description" rows="5" cols="40" onChange={handleChange}/>
                    </label>
                    <label>
                        <p>Additional Notes</p>
                        <textarea name="notes" rows="2" cols="40" onChange={handleChange}/>
                    </label>
                </fieldset>
            </form>
            <Upload style={{ margin: 'auto'}}/>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        newReviewFields: getNewReviewFields(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNewReviewField: (field, val) => dispatch(setNewReviewField(field, val))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewReview)