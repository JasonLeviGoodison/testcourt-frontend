import React, { useState, useReducer, useEffect } from "react";
import "../App.css";
import Upload from "./upload/Upload";
import { makeStyles } from '@material-ui/core/styles';
import { setNewReviewField } from '../redux/actions';
import { getAllPackageTypes } from '../redux/thunks';
import { getNewReviewFields, getPackageOptions } from '../redux/selectors';
import DatePicker from "react-datepicker";
import withAuthorization from "../auth/withAuthorization";
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

function NewReview(props) {
  const { name } = props.newReviewFields;
  const [submitting, setSubmitting] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [packageType, setPackageType] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    props.getAllPackageTypes();
  }, []);

  const handleChange = event => {
    props.setNewReviewField(event.target.name, event.target.value);
  }

  const handleDropDownChange = option => {
    setPackageType(option.value);
    props.setNewReviewField('packagetypes', option.value);
  }

  const handleStartDateChange = date => {
    setStartDate(date);
    props.setNewReviewField('due_date', date);
  }

  return (
    <div className="Card" style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
      <form style={{ margin: 'auto', textAlign: 'left' }}>
        <h2 style={{ textAlign: 'center', paddingBottom: 25 }}>New Review</h2>
        <fieldset style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            <p>Client Name</p>
            <input name="name" onChange={handleChange} />
          </label>
          <label>
            <p>Case #</p>
            <input name="casenumber" onChange={handleChange} />
          </label>
          <label>
            <p>Due Date</p>
            <DatePicker name="due_date" selected={startDate} onChange={date => handleStartDateChange(date)} />
          </label>
          <label>
            <p>Package Type</p>
            <Dropdown onChange={handleDropDownChange} options={props.packageOptions} placeholder="Select an option" />
          </label>
          <label>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Brief Description</p>
              <textarea maxLength="254" name="description" rows="5" cols="40" onChange={handleChange} />
              255 char limit
                        </div>
          </label>
          <label>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Additional Notes</p>
              <textarea maxLength="254" name="notes" rows="2" cols="40" onChange={handleChange} />
              (Optional) 255 char limit
                        </div>
          </label>
        </fieldset>
      </form>
      <Upload style={{ margin: 'auto' }} loggedUser={props.loggedUser} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    newReviewFields: getNewReviewFields(state),
    packageOptions: getPackageOptions(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNewReviewField: (field, val) => dispatch(setNewReviewField(field, val)),
    getAllPackageTypes: () => dispatch(getAllPackageTypes())
  }
}

const authCondition = authUser => !!authUser;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthorization(authCondition)(NewReview))