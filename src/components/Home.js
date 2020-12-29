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

function Home(props) {
  var inReview = props.inReview;
  return (
    <>
      {
        !inReview ? <><DocsList/> <ReviewPreview/></> : <> <DocumentViewer/> <CheckList/></>
      }
    </>
  );
}

const authCondition = authUser => !!authUser;

const mapStateToProps = (state) => {
  return {
    inReview: getInReview(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthorization(authCondition)(Home));