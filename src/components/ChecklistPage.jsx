import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import Button from 'react-bootstrap/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import { cleanChecklistOfOptions } from '../utils';
import CheckListModifier from './CheckListModifier';
import { getAllChecklists } from '../redux/selectors';
import withAuthorization from '../auth/withAuthorization';
import { fetchAllCompanyChecklists, deleteCompanyChecklist } from '../redux/thunks';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ChecklistPage(props) {
  const { allChecklists = {}, deleteRequestCompanyChecklist } = props;
  const cleanedChecklists = cleanChecklistOfOptions(allChecklists);
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [newChecklistName, setNewChecklistName] = useState('');
  const [checklists, setChecklists] = useState(cleanedChecklists);
  const [deleteConfirmKey, setDeleteConfirmKey] = useState('');

  useEffect(() => {
    props.getAllChecklists();
  }, []);

  useEffect(() => {
    const cleaned = cleanChecklistOfOptions(allChecklists);
    setChecklists(cleaned);
  // eslint-disable-next-line react/destructuring-assignment
  }, [props.allChecklists]);

  const createNewChecklist = () => {
    checklists[newChecklistName] = [];
    setChecklists(checklists);
    setNewChecklistName('');
    setIsOpenModal(false);
  };

  const deleteChecklist = () => {
    deleteRequestCompanyChecklist(deleteConfirmKey);
    setDeleteConfirmKey('');
  };

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto', minWidth: 500, width: '75%',
      }}
    >
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Package Types</Card.Title>
        </Card.Body>
        <div style={{ display: 'flex', borderTopStyle: 'solid', borderBlockColor: 'inherit' }}>
          <ListGroup className="list-group-flush" style={{ textAlign: 'left', flex: 1, borderRightStyle: 'inset' }}>
            {Object.keys(checklists).map((key) => (
              <ListGroupItem key={key}>
                <CheckListModifier
                  key={key}
                  name={key}
                  checklist={checklists[key]}
                  setDeleteConfirmKey={setDeleteConfirmKey}
                />
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: 10 }}>
          <Tooltip title="New Checklist">
            <Fab size="large" color="primary" aria-label="add" onClick={() => setIsOpenModal(true)}>
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
      </Card>
      <Modal style={customStyles} isOpen={isModalOpen} ariaHideApp={false}>
        <Card style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Card.Body>
            <Card.Title>Name for the new checklist</Card.Title>
            <TextField
              id="standard-basic"
              label="New Item"
              onChange={(evt) => setNewChecklistName(evt.target.value)}
              value={newChecklistName}
            />
            <div style={{ marginTop: 25 }}>
              <Button variant="outline-secondary" style={{ marginRight: 3 }} onClick={() => { setIsOpenModal(false); }}>Close</Button>
              <Button onClick={createNewChecklist} variant="primary">Create</Button>
            </div>
          </Card.Body>
        </Card>
      </Modal>
      <Modal style={customStyles} isOpen={deleteConfirmKey !== ''} ariaHideApp={false}>
        <Card style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Card.Body>
            <Card.Title>
              Are you sure you want to delete
              {' '}
              {deleteConfirmKey}
            </Card.Title>
            <div style={{ marginTop: 25 }}>
              <Button variant="outline-secondary" style={{ marginRight: 3 }} onClick={() => { setDeleteConfirmKey(''); }}>Close</Button>
              <Button onClick={deleteChecklist} variant="primary">Delete</Button>
            </div>
          </Card.Body>
        </Card>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allChecklists: getAllChecklists(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllChecklists: () => dispatch(fetchAllCompanyChecklists()),
  deleteRequestCompanyChecklist: (name) => dispatch(deleteCompanyChecklist(name)),
});

ChecklistPage.propTypes = {
  allChecklists: PropTypes.array.isRequired,
  getAllChecklists: PropTypes.func.isRequired,
  deleteRequestCompanyChecklist: PropTypes.func.isRequired,
};

const authCondition = (authUser) => !!authUser;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withAuthorization(authCondition)(ChecklistPage));
