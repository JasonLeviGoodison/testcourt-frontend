import { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import { removeSnackbar } from '../redux/actions';

class Notifier extends Component {
  constructor() {
    super();
    this.displayed = [];
  }

  shouldComponentUpdate({ notifications: newSnacks = [] }) {
    const { notifications: currentSnacks } = this.props;
    let notExists = false;
    for (let i = 0; i < newSnacks.length; i += 1) {
      if (notExists) {
        continue;
      }
      notExists = notExists || !currentSnacks.filter(({ key }) => newSnacks[i].key === key).length;
    }
    return notExists;
  }

  componentDidUpdate() {
    const { notifications = [], enqueueSnackbar } = this.props;

    notifications.forEach((notification) => {
      // Do nothing if snackbar is already displayed
      if (this.displayed.includes(notification.key)) return;
      // Display snackbar using notistack
      enqueueSnackbar(notification.message, notification.options);
      // Keep track of snackbars that we've displayed
      this.storeDisplayed(notification.key);
      // Dispatch action to remove snackbar from redux store
      removeSnackbar(notification.key);
    });
  }

  storeDisplayed(id) {
    this.displayed = [...this.displayed, id];
  }

  render() {
    return null;
  }
}

const mapStateToProps = (store) => ({
  notifications: store.notifier.notifications,
});

Notifier.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
  notifications: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ removeSnackbar }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withSnackbar(Notifier));
