import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Divider from '@material-ui/core/Divider';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Modal from 'react-modal';
import ReviewEventLog from './ReviewEventLog';
import { getCurDocMeta } from '../redux/selectors';
import Status from './Status/Status';
import Upload from './upload/Upload';
import * as routes from '../routes/routes';
import {
  requestDeleteKey,
  requestUpdateForm,
  fetchPackageReviewById,
  submitVerdict,
} from '../redux/thunks';
import { setInReview, setCurrentDocField } from '../redux/actions';
import * as newRequestApi from '../api/newRequestApi';
import Pill from './Status/Pill';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ReviewPreview(props) {
  const {
    curDoc,
    deleteFile,
    updateForm,
    fetchReviewById,
    resetVerdict,
  } = props;

  const [editMode, setEditMode] = useState(false);
  const [editFileMode, setEditFileMode] = useState(false);
  const { history } = props;
  const [keyToUrl, setKeyToUrl] = useState({}); // dict key: signedUrl
  const [refreshFields, setRefreshFields] = useState(0);
  const [deleteFileKey, setDeleteFileKey] = useState(''); // modal appears if non empty

  if (Object.entries(curDoc) !== 0 && curDoc.keys !== undefined) {
    for (let i = 0; i < curDoc.keys.length; i += 1) {
      const key = curDoc.keys[i];
      if (!(key in keyToUrl)) {
        newRequestApi.GetViewObjectSignedUrl(key).then(({ url }) => {
          setKeyToUrl({ ...keyToUrl, [key]: url });
        }).catch(() => {
          setKeyToUrl({ ...keyToUrl, [key]: '404' });
        });
        break;
      }
    }
  }

  useEffect(() => {
    setEditMode(false);
    setEditFileMode(false);
  }, [curDoc]);

  const handleEditClicked = () => {
    setEditMode(true);
  };

  const handleSavedClicked = () => {
    const { id } = curDoc;
    const form = {
      name: curDoc.name,
      casenumber: curDoc.casenumber,
      description: curDoc.description,
    };
    setEditMode(false);
    updateForm(form, id);
  };

  const handleChange = (event) => {
    props.setCurDocField(event.target.name, event.target.value, curDoc.id);
    setRefreshFields(refreshFields + 1);
  };

  const handleButtonClick = () => {
    history.push(`${routes.REVIEW}/${curDoc.id}`);
  };

  const handleDeleteFile = () => {
    if (deleteFileKey === '') {
      return;
    }
    deleteFile(deleteFileKey, curDoc.id)
      .then(() => {
        setDeleteFileKey('');
      });
  };

  const resetStatus = () => {
    resetVerdict(curDoc.id, curDoc.checked_off_items);
  };

  if (Object.entries(curDoc) < 2) {
    return <p style={{ margin: 'auto' }}> Please select a package to review </p>;
  }

  return (
    <div style={{
      flex: '1', overflowY: 'scroll', backgroundColor: '#eeeee', padding: 85, paddingTop: 20,
    }}
    >
      <Card style={{ width: '100%' }}>
        <Card.Body style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Card.Title style={{ width: '70%' }}>
            {' '}
            <div>

              {editMode ? <input style={{ width: '100%' }} name="name" value={curDoc.name} key="name" onChange={handleChange} />
                : curDoc.name}
              <div style={{ fontSize: 14, paddingTop: 5 }}>
                <Pill
                  key={curDoc.status + curDoc.id}
                  status={curDoc.status}
                />
                {'  '}
                <span style={{ fontSize: 12, paddingLeft: 5 }}>{new Date(curDoc.created_at).toLocaleDateString('en-US')}</span>
                {'  '}
                <span style={{ paddingLeft: 5 }}>
                  {' '}
                  {curDoc.posted_by}
                  {' '}
                </span>
                <br />

              </div>
            </div>

          </Card.Title>
          <div>
            {editMode
              ? <SaveIcon style={{ cursor: 'pointer', marginRight: 15 }} onClick={handleSavedClicked} />
              : <EditIcon style={{ cursor: 'pointer', marginRight: 15 }} onClick={handleEditClicked} />}
            <Button variant="primary" onClick={handleButtonClick}>
              {curDoc.status === Status.WAITING ? 'Start Review' : 'Re-review'}
            </Button>
          </div>
        </Card.Body>
        <div style={{ display: 'flex', borderTopStyle: 'solid', borderBlockColor: 'inherit' }}>
          <ListGroup className="list-group-flush" style={{ textAlign: 'left', flex: 1, borderRightStyle: 'inset' }}>
            <ListGroupItem>
              <b>Due Date</b>
              :
              {' '}
              {new Date(curDoc.due_date).toLocaleDateString('en-US')}
            </ListGroupItem>
            <ListGroupItem>
              <b>Package Type</b>
              :
              {' '}
              {curDoc.package_types.join(', ')}
            </ListGroupItem>
            <ListGroupItem>
              {' '}
              <b>Description</b>
              :
              {' '}
              {editMode ? <textarea name="description" key="description" style={{ width: '100%' }} value={curDoc.description || ''} onChange={handleChange} />
                : curDoc.description}
            </ListGroupItem>
          </ListGroup>
        </div>
        <Divider />
      </Card>
      <Card style={{ width: '100%', marginTop: 10, marginBottom: 10 }}>
        <ListGroup className="list-group-flush" style={{ textAlign: 'left', flex: 1 }}>
          <ListGroupItem>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <b>Files</b>
              {editFileMode
                ? <SaveIcon style={{ cursor: 'pointer', marginRight: 15 }} onClick={() => setEditFileMode(false)} />
                : <EditIcon style={{ cursor: 'pointer', marginRight: 15 }} onClick={() => setEditFileMode(true)} />}
            </div>
          </ListGroupItem>
          {curDoc.keys.map((key, i) => (
            <ListGroupItem
              key={`${key} ${i}`}
              style={{
                textAlign: 'left',
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {' '}
              <p>{key.substring(key.lastIndexOf('/') + 1)}</p>
              {editFileMode
                ? <DeleteOutlinedIcon style={{ cursor: 'pointer' }} onClick={() => setDeleteFileKey(key)} />
                : (
                  <a
                    variant="secondary"
                    href={keyToUrl[key] ? keyToUrl[key] : '#'}
                    download
                  >
                    Download
                  </a>
                )}
            </ListGroupItem>
          ))}
        </ListGroup>
        {editFileMode
          ? (
            <Upload
              id={curDoc.id}
              isReviewPreview
              uploadedCallback={() => {
                setEditFileMode(false);
                fetchReviewById(curDoc.id);
              }}
            />
          )
          : null}
      </Card>
      <ReviewEventLog id={curDoc.id} />
      {/* Delete Modal for files */}
      <Modal isOpen={deleteFileKey !== ''} style={modalStyles} contentLabel="Confirmation modal" ariaHideApp={false}>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>
              Are you sure you want to delete this file?
            </Card.Title>
          </Card.Body>
          <Card.Body>
            <Button onClick={handleDeleteFile} variant="primary" style={{ marginRight: '3px' }}>Confirm</Button>
            <Button variant="outline-secondary" onClick={() => setDeleteFileKey('')}>Close</Button>
          </Card.Body>
        </Card>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  curDoc: getCurDocMeta(state),
});

const mapDispatchToProps = (dispatch) => ({
  setInReview: (value) => dispatch(setInReview(value)),
  setCurDocField: (field, value, id) => dispatch(setCurrentDocField(field, value, id)),
  deleteFile: (key, id) => dispatch(requestDeleteKey(key, id)),
  updateForm: (form, id) => dispatch(requestUpdateForm(form, id)),
  fetchReviewById: (id) => dispatch(fetchPackageReviewById(id)),
  resetVerdict:
  (id, checkedOffItems) => dispatch(submitVerdict(id, Status.WAITING, checkedOffItems)),
});

ReviewPreview.propTypes = {
  curDoc: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  setCurDocField: PropTypes.func.isRequired,
  deleteFile: PropTypes.func.isRequired,
  updateForm: PropTypes.func.isRequired,
  fetchReviewById: PropTypes.func.isRequired,
  resetVerdict: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ReviewPreview));
