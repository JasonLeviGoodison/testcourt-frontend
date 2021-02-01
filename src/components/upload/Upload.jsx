import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as guid } from 'uuid';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import Dropzone from '../dropzone/Dropzone';
import { getNewReviewFields } from '../../redux/selectors';
import { uploadNewRequest } from '../../redux/actions';
import * as requestApi from '../../api/newRequestApi';
import * as routes from '../../routes/routes';
import './Upload.css';

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

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      successfullUploaded: false,
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.uploadReview = this.uploadReview.bind(this);
    this.uploadForm = this.uploadForm.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  onFilesAdded(files) {
    this.setState((prevState) => ({
      files: prevState.files.concat(files),
    }));
  }

  async uploadReview() {
    const id = guid();
    // attach guid to these files and the review
    await this.uploadForm(id)
      .then(async () => this.uploadFiles(id))
      .then(() => {
        this.setState({ uploading: false });
        const { history } = this.props;
        history.push(routes.HOME);
      })
      .catch((() => {
        this.setState({ uploading: false });
        // TODO: Have a better error handling method
        // eslint-disable-next-line no-alert
        alert('Error uploading documents');
      }));
  }

  validForm() {
    const { newReviewFields } = this.props;
    const { files } = this.state;
    const form = newReviewFields;

    return (form.name != null
      && form.casenumber != null
      && form.due_date != null
      && form.packagetypes != null
      && form.description != null
      && files.length !== 0);
  }

  async uploadForm(id) {
    const { newReviewFields, loggedUser } = this.props;
    if (!this.validForm()) {
      // TODO: Have a better error handler
      // eslint-disable-next-line no-alert
      alert('One or more fields not filled out');
      throw Error('Not filled out');
    }
    const form = {
      ...newReviewFields,
      posted_by: loggedUser.email,
    };
    return requestApi.UploadForm(form, id);
  }

  async uploadFiles(id) {
    const { files } = this.state;
    this.setState({ uploading: true });
    const promises = [];
    files.forEach((file) => {
      promises.push(this.sendRequest(file, id));
    });

    try {
      await Promise.all(promises);
      this.setState({ uploading: false });
    } catch (e) {
      // TODO: Have a better error handler
      // eslint-disable-next-line no-alert
      alert('Could not upload files.');
      this.setState({ uploading: false });
      throw e;
    }
  }

  // eslint-disable-next-line
  sendRequest(file, id) {
    return new Promise((resolve, reject) => requestApi.UploadFile(file, id)
      .then(() => resolve())
      .catch((err) => reject(err)));
  }

  renderActions() {
    return (
      <div>
        <Button
          variant="secondary"
          style={{ marginRight: 10 }}
          onClick={() => this.setState({ files: [], successfullUploaded: false })}
        >
          Clear
        </Button>
        <Button variant="primary" onClick={this.uploadReview}>
          Submit
        </Button>
      </div>
    );
  }

  render() {
    const { uploading, files, successfullUploaded } = this.state;
    return (
      <div className="Upload">
        <div className="Content">
          <div style={{ paddingLeft: '5px' }}>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={uploading || successfullUploaded}
            />
          </div>
          <div className="Files">
            Files to upload
            {files.map((file) => (
              <div key={file.name} className="Row">
                <span className="Filename">{file.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="Actions">{this.renderActions()}</div>
        <Modal isOpen={uploading} style={customStyles} contentLabel="WaitModal" ariaHideApp={false}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>Uploading Documents. Please Wait ...</Card.Title>
            </Card.Body>
          </Card>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newReviewFields: getNewReviewFields(state),
});

const mapDispatchToProps = (dispatch) => ({
  submitNewReview: (id) => dispatch(uploadNewRequest(id)),
});

Upload.propTypes = {
  newReviewFields: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loggedUser: PropTypes.object.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Upload));
