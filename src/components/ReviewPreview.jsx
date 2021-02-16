import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Divider from '@material-ui/core/Divider';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import { getCurDocMeta } from '../redux/selectors';
import Status from './Status/Status';
import * as routes from '../routes/routes';
import { setInReview, setCurrentDocField, enqueueSnackbar } from '../redux/actions';
import * as newRequestApi from '../api/newRequestApi';
import Pill from './Status/Pill';

function ReviewPreview(props) {
  const { curDoc } = props;
  const [editMode, setEditMode] = useState(false);
  const { history } = props;
  const { enqueueNotification } = props;
  const [keyToUrl, setKeyToUrl] = useState({}); // dict key: signedUrl
  const [refreshFields, setRefreshFields] = useState(0);

  if (Object.entries(curDoc) !== 0 && curDoc.keys !== undefined) {
    for (let i = 0; i < curDoc.keys.length; i += 1) {
      const key = curDoc.keys[i];
      if (!(key in keyToUrl)) {
        newRequestApi.GetViewObjectSignedUrl(key).then(({ url }) => {
          setKeyToUrl({ ...keyToUrl, [key]: url });
        });
      }
    }
  }
  const handleEditClicked = () => {
    setEditMode(true);
  };

  const handleSavedClicked = () => {
    const { id } = curDoc;
    const form = {
      name: curDoc.name,
      casenumber: curDoc.casenumber,
      description: curDoc.description,
      notes: curDoc.notes,
    };
    setEditMode(false);
    newRequestApi.UpdateForm(form, id)
      .then(() => {
        enqueueNotification(
          'Successfully updated Package',
          'success',
        );
      })
      .catch((err) => {
        enqueueNotification(
          `Error: ${err}`,
          'error',
        );
      });
  };

  const handleChange = (event) => {
    props.setCurDocField(event.target.name, event.target.value, curDoc.id);
    setRefreshFields(refreshFields + 1);
  };

  const handleButtonClick = () => {
    history.push(`${routes.REVIEW}/${curDoc.id}`);
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
          <Card.Title>Package Preview</Card.Title>
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
            <ListGroupItem style={{ textAlign: 'center' }}><b>Package info</b></ListGroupItem>
            <ListGroupItem>
              <b>Client Name</b>
              :
              {' '}
              {editMode ? <input name="name" value={curDoc.name} key="name" onChange={handleChange} />
                : curDoc.name}
            </ListGroupItem>
            <ListGroupItem>
              <b>Case #</b>
              :
              {' '}
              {editMode ? <input name="case_number" key="case_number" value={curDoc.case_number} onChange={handleChange} />
                : curDoc.case_number}
            </ListGroupItem>
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
          <ListGroup className="list-group-flush" style={{ textAlign: 'left', flex: 1 }}>
            <ListGroupItem style={{ textAlign: 'center' }}><b>Poster info</b></ListGroupItem>
            <ListGroupItem>
              {' '}
              <b>Status</b>
              :
              {' '}
              <Pill key={curDoc.status + curDoc.id} status={curDoc.status} />
              {' '}
            </ListGroupItem>
            <ListGroupItem>
              <b>Posted By</b>
              :
              {' '}
              {curDoc.posted_by}
            </ListGroupItem>
            <ListGroupItem>
              <b>Created</b>
              :
              {' '}
              {new Date(curDoc.created_at).toLocaleDateString('en-US')}
            </ListGroupItem>
            <ListGroupItem>
              {' '}
              <b>Notes</b>
              :
              {' '}
              {editMode ? <textarea name="notes" key="notes" style={{ width: '100%' }} value={curDoc.notes || ''} onChange={handleChange} />
                : curDoc.notes}
            </ListGroupItem>
          </ListGroup>
        </div>
        <Divider />
      </Card>
      <Card style={{ width: '100%', marginTop: 10 }}>
        <ListGroup className="list-group-flush" style={{ textAlign: 'left', flex: 1 }}>
          <ListGroupItem><b>Files</b></ListGroupItem>
          {curDoc.keys.map((key) => (
            <ListGroupItem
              key={key}
              style={{
                textAlign: 'left',
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {' '}
              <p>{key.substring(key.lastIndexOf('/') + 1)}</p>
              <a
                variant="secondary"
                href={keyToUrl[key] ? keyToUrl[key] : '#'}
                download
              >
                Download
              </a>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => ({
  curDoc: getCurDocMeta(state),
});

const mapDispatchToProps = (dispatch) => ({
  setInReview: (value) => dispatch(setInReview(value)),
  setCurDocField: (field, value, id) => dispatch(setCurrentDocField(field, value, id)),
  enqueueNotification: (message, variant) => dispatch(
    enqueueSnackbar({
      message,
      options: {
        variant,
      },
    }),
  ),
});

ReviewPreview.propTypes = {
  curDoc: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  setCurDocField: PropTypes.func.isRequired,
  enqueueNotification: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ReviewPreview));
