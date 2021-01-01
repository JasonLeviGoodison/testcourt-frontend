import React from 'react';
import DocsList from './DocsList'
import CheckList from './CheckList';
import DocumentViewer from './DocumentViewer';
import AuthUserContext from "../auth/AuthUserContext";
import withAuthorization from "../auth/withAuthorization";
import { Redirect } from "react-router-dom";
import * as routes from "../routes/routes";
import ReviewPreview from './ReviewPreview';
import { getInReview } from '../redux/selectors';
import { connect } from 'react-redux';

function Review(props) {
  const id = props.match.params.id;
  return (
    <>
      {
        <> <DocumentViewer id={id}/> <CheckList id={id}/> </>
      }
    </>
  );
}

const authCondition = authUser => !!authUser;

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthorization(authCondition)(Review));
// with router -> gives us history prop
// with auth -> authorization
// connect -> connects us to redux store