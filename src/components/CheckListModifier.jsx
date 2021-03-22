/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ListGroupItem, ListGroup } from 'react-bootstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { getAllPackageTypes, updatePackageType } from '../redux/thunks';
// import { getPackageOptions } from '../redux/selectors';
import withAuthorization from '../auth/withAuthorization';

function CheckListModifier(props) {
  const { checklist, name, setDeleteConfirmKey } = props;
  const [items, setItems] = useState(checklist);
  const [inputRow, setInputRow] = useState('');

  const deleteItem = (item) => () => {
    const newList = items.filter((x) => x !== item);
    setItems(newList);
  };

  const addInputRow = () => {
    items.push(inputRow);
    setInputRow('');
    setItems(items);
  };

  const updateInputRow = (evt) => {
    const input = evt.target.value;
    setInputRow(input);
  };

  const updateRow = (index) => (evt) => {
    const input = evt.target.value;
    const copyItems = [...items];
    copyItems[index] = input;
    setItems(copyItems);
  };

  const onSave = () => {
    let updateRows = items;
    if (inputRow !== '') {
      updateRows.push(inputRow);
    }
    updateRows = updateRows.filter((row) => row !== '');
    props.updatePackageType(name, updateRows);
  };

  if (items === null || items === []) {
    return 'Loading ...';
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {name}
        </div>
        <Tooltip title="Delete item">
          <DeleteOutlinedIcon style={{ cursor: 'pointer' }} onClick={() => setDeleteConfirmKey(name)} />
        </Tooltip>
      </AccordionSummary>
      <AccordionDetails style={{
        flexDirection: 'column',
        display: 'flex',
      }}
      >
        <ListGroup
          className="list-group-flush"
          style={{
            textAlign: 'left',
            flex: 1,
            borderRightStyle: 'inset',
          }}
        >
          {items.map((item, i) => (
            <ListGroupItem key={`listitem${name}${i}`} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextField key={`textfield${name}${i}`} style={{ width: '100%' }} onChange={updateRow(i)} value={item} />
              <div style={{ paddingLeft: 5 }}>
                <Tooltip title="Delete item">
                  <DeleteOutlinedIcon style={{ cursor: 'pointer' }} onClick={deleteItem(item)} />
                </Tooltip>
              </div>
            </ListGroupItem>
          ))}
          <TextField label="New Item" key={`textfield2${name}`} style={{ width: 500, margin: '0px 20px' }} onChange={updateInputRow} value={inputRow} />
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 15 }}>
            <Tooltip title="Add item">
              <AddCircleIcon
                color="primary"
                style={{ cursor: 'pointer' }}
                fontSize="large"
                onClick={addInputRow}
              />
            </Tooltip>
          </div>
        </ListGroup>
        <Button
          color="outline-primary"
          style={{
            width: 100, marginLeft: 'auto', marginRight: 'auto',
          }}
          onClick={onSave}
        >
          Save
        </Button>
      </AccordionDetails>
    </Accordion>
  );
}
const mapStateToProps = (/* state */) => ({
  // packageOptions: getPackageOptions(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllPackageTypes: () => dispatch(getAllPackageTypes()),
  updatePackageType: (name, list) => dispatch(updatePackageType(name, list)),
});

CheckListModifier.propTypes = {
  checklist: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  updatePackageType: PropTypes.func.isRequired,
  setDeleteConfirmKey: PropTypes.func.isRequired,
};

const authCondition = (authUser) => !!authUser;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withAuthorization(authCondition)(CheckListModifier));
