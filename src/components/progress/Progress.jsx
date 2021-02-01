import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Progress.css';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { progress } = this.props;
    return (
      <div className="ProgressBar">
        <div
          className="Progress"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }
}
Progress.defaultProps = {
  progress: 0,
};

Progress.propTypes = {
  progress: PropTypes.number,
};

export default Progress;
