/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dropzone.css';

class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.state = { highlight: false };
    this.fileInputRef = React.createRef();

    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onFilesAdded(evt) {
    const { disabled, onFilesAdded } = this.props;
    if (disabled) return;
    const { files } = evt.target;
    if (onFilesAdded) {
      const array = this.fileListToArray(files);
      onFilesAdded(array);
    }
  }

  onDragOver(event) {
    const { disabled } = this.props;
    event.preventDefault();
    if (disabled) return;
    this.setState({ highlight: true });
  }

  onDragLeave() {
    this.setState({ highlight: false });
  }

  onDrop(event) {
    const { disabled, onFilesAdded } = this.props;
    event.preventDefault();
    if (disabled) return;
    const { files } = event.dataTransfer;
    if (onFilesAdded) {
      const array = this.fileListToArray(files);
      onFilesAdded(array);
    }
    this.setState({ highlight: false });
  }

  fileListToArray(list) {
    const array = [];
    for (let i = 0; i < list.length; i += 1) {
      array.push(list.item(i));
    }
    return array;
  }

  openFileDialog() {
    const { disabled } = this.props;
    if (disabled) return;
    this.fileInputRef.current.click();
  }

  render() {
    const { highlight } = this.state;
    const { disabled } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        type="button"
        className={`Dropzone ${highlight ? 'Highlight' : ''}`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: disabled ? 'default' : 'pointer' }}
      >
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
        <img
          alt="upload"
          className="Icon"
          src="baseline-cloud_upload-24px.svg"
        />
        <span>Upload Files</span>
      </div>
    );
  }
}

Dropzone.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onFilesAdded: PropTypes.func.isRequired,
};

export default Dropzone;
