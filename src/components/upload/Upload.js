import React, { Component } from "react";
import Dropzone from "../dropzone/Dropzone";
import Progress from "../progress/Progress";
import { getNewReviewFields } from '../../redux/selectors';
import { uploadNewRequest } from '../../redux/actions';
import * as requestApi from '../../api/newRequestApi';
import * as routes from '../../routes/routes';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { v4 as guid } from 'uuid';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Modal from 'react-modal';
import "./Upload.css";
const BASE_ADDRESS = process.env.REACT_APP_API_URL;

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

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
        files: [],
        uploading: false,
        successfullUploaded: false,
        newReviewForms: props.newReviewFields
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.uploadReview = this.uploadReview.bind(this);
    this.uploadForm = this.uploadForm.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }

  async uploadReview() {
    const id = guid();
    // attach guid to these files and the review
    this.setState({id},
      async () => await this.uploadForm(id)
        .then(async () => await this.uploadFiles(id))
        .then(() => {
          this.setState({ uploading: false });
          const { history } = this.props;
          history.push(routes.HOME);
        })
        .catch((() => {
          console.log("error uploading")
          this.setState({ uploading: false });
          alert("Error uploading documents");
        })))
  }

  validForm() {
    let form = this.props.newReviewFields;
    return (form.name != null &&
      form.casenumber != null && 
      form.due_date != null &&
      form.packagetypes != null &&
      form.description != null &&
      this.state.files.length != 0)
  }

  async uploadForm(id) {
    if (!this.validForm()) { alert("One or more fields not filled out"); throw "NOT_FILLED_OUT"; }
    var form = {
        ...this.props.newReviewFields,
        posted_by: this.props.loggedUser.email
    }
    return requestApi.UploadForm(form, id);
  }

  async uploadFiles(id) {
    this.setState({ uploading: true });
    const promises = [];
    this.state.files.forEach(file => {
        promises.push(this.sendRequest(file, id));
    });

    try {
      console.log("about to wait on promise.all", promises)
      await Promise.all(promises);
      console.log("promise.all is finished")
      this.setState({ uploading: false });
    }
    catch(e) {
      alert("Could not upload files.");
      this.setState({ uploading: false });
      throw e;
    }
  }

  sendRequest(file, id) {
    return new Promise((resolve, reject) => {
      return requestApi.UploadFile(file, id)
        .then(() => resolve())
        .catch(err => reject(err))
    });
  }

  renderActions() {
    return (
      <div >
        <Button
          variant="secondary"
          style={{marginRight : 10}}
          onClick={() =>
            this.setState({ files: [], successfullUploaded: false })
        }>
          Clear
        </Button>
        <Button variant="primary" onClick={this.uploadReview}>
          Submit
        </Button>
      </div>
    );
  }

  render() {
    return (
      <div className="Upload">
        <div className="Content">
          <div style={{paddingLeft: '5px'}}>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            />
          </div>
          <div className="Files">
            Files to upload
            {this.state.files.map(file => {
              return (
                <div key={file.name} className="Row">
                  <span className="Filename">{file.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Actions">{this.renderActions()}</div>
         {
          <Modal isOpen={this.state.uploading} style={customStyles} contentLabel="WaitModal" ariaHideApp={false}>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Uploading Documents. Please Wait ...</Card.Title>
                    </Card.Body>
                </Card>
          </Modal>
         }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newReviewFields: getNewReviewFields(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      submitNewReview: (guid) => dispatch(uploadNewRequest(guid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Upload));