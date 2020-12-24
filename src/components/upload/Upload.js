import React, { Component } from "react";
import Dropzone from "../dropzone/Dropzone";
import Progress from "../progress/Progress";
import { getNewReviewFields } from '../../redux/selectors';
import { uploadNewRequest } from '../../redux/actions';
import { connect } from 'react-redux';
import { v4 as guid } from 'uuid';
import "./Upload.css";
const BASE_ADDRESS = "http://localhost:3000"

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
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
    this.setState({id}, () => this.uploadForm(id)
                              .then(() => this.uploadFiles(id)
                              .catch(err => alert("error message"))))
  }

  async uploadForm(id) {
    // if (Object.keys(this.state.newReviewForms).length === 0)
    // {
    //   alert("One or more fields is not filled out")
    // }
    var body = JSON.stringify(this.props.newReviewFields);
    console.log("body", body)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body
    }
    return await fetch(`${BASE_ADDRESS}/upload/form/${id}`, requestOptions);
  }

  async uploadFiles(id) {
    this.setState({ uploadProgress: {}, uploading: true });
    const promises = [];
    this.state.files.forEach(file => {
      promises.push(this.sendRequest(file, id));
    });
    try {
      await Promise.all(promises);

      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      alert("Could not upload files.");
      this.setState({ successfullUploaded: true, uploading: false });
    }
  }

  sendRequest(file, id) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
          this.setState({ uploadProgress: copy });
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "done", percentage: 100 };
        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });

      const formData = new FormData();
      formData.append("file", file, file.name);

      req.open("POST", `${BASE_ADDRESS}/upload/file/${id}`);
      req.send(formData);
    });
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (true) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <img
            className="CheckIcon"
            alt="done"
            src="baseline-check_circle_outline-24px.svg"
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  }

  renderActions() {
    if (this.state.successfullUploaded) {
      return (
        <button
          onClick={() =>
            this.setState({ files: [], successfullUploaded: false })
          }
        >
          Clear
        </button>
      );
    } else {
      return (
        <button
          disabled={this.state.files.length < 0 || this.state.uploading}
          onClick={this.uploadReview}
        >
          Submit
        </button>
      );
    }
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
            {this.state.files.map(file => {
              return (
                <div key={file.name} className="Row">
                  <span className="Filename">{file.name}</span>
                  {this.renderProgress(file)}
                </div>
              );
            })}
          </div>
        </div>
        <div className="Actions">{this.renderActions()}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
