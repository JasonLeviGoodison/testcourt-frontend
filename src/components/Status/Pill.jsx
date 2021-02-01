import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';
import Status from './Status';

class Pill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
    };
  }

  render() {
    const { status } = this.state;

    switch (status) {
      case Status.WAITING:
        return (
          <Badge pill variant="primary">
            Waiting For Review
          </Badge>
        );
      case Status.APPROVED:
        return (
          <Badge pill variant="success">
            Approved
          </Badge>
        );
      case Status.REJECTED:
        return (
          <Badge pill variant="danger">
            Rejected
          </Badge>
        );
      default:
    }
    return '';
  }
}

Pill.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Pill;
