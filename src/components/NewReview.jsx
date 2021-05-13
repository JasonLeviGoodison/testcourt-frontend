/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import '../App.css';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';
import PropTypes from 'prop-types';
import Upload from './upload/Upload';
import { setNewReviewField } from '../redux/actions';
import { getAllPackageTypes } from '../redux/thunks';
import { getNewReviewFields, getPackageOptions } from '../redux/selectors';
import withAuthorization from '../auth/withAuthorization';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-dropdown/style.css';

function NewReview(props) {
  const [startDate, setStartDate] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [packageType, setPackageType] = useState(null);
  const { packageOptions, loggedUser } = props;

  useEffect(() => {
    props.getAllPackageTypes();
  }, []);

  const handleChange = (event) => {
    props.setNewReviewField(event.target.name, event.target.value);
  };

  const handleDropDownChange = (option) => {
    setPackageType(option.value);
    props.setNewReviewField('packagetypes', option.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    props.setNewReviewField('due_date', date);
  };

  return (
    <div className="Card" style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
      <form style={{ margin: 'auto', textAlign: 'left' }}>
        <h2 style={{ textAlign: 'center', paddingBottom: 25 }}>New Review</h2>
        <fieldset style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            <p>Title</p>
            <input name="name" onChange={handleChange} />
          </label>
          <label>
            <p>Due Date</p>
            <DatePicker name="due_date" selected={startDate} onChange={(date) => handleStartDateChange(date)} />
          </label>
          <label>
            <p>Package Type</p>
            <Dropdown onChange={handleDropDownChange} options={packageOptions} placeholder="Select an option" />
          </label>
          <label>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p>Brief Description</p>
              <textarea maxLength="254" name="description" rows="5" cols="40" onChange={handleChange} />
              255 char limit
            </div>
          </label>
        </fieldset>
      </form>
      <Upload style={{ margin: 'auto' }} loggedUser={loggedUser} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  newReviewFields: getNewReviewFields(state),
  packageOptions: getPackageOptions(state),
});

const mapDispatchToProps = (dispatch) => ({
  setNewReviewField: (field, val) => dispatch(setNewReviewField(field, val)),
  getAllPackageTypes: () => dispatch(getAllPackageTypes()),
});

NewReview.propTypes = {
  setNewReviewField: PropTypes.func.isRequired,
  getAllPackageTypes: PropTypes.func.isRequired,
  packageOptions: PropTypes.array.isRequired,
  loggedUser: PropTypes.object.isRequired,
};

const authCondition = (authUser) => !!authUser;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withAuthorization(authCondition)(NewReview));
