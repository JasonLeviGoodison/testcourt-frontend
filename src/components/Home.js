import React from 'react';
import DocsList from './DocsList'
import CheckList from './CheckList';
import DocumentViewer from './DocumentViewer';
import AuthUserContext from "../auth/AuthUserContext";
import withAuthorization from "../auth/withAuthorization";
import { Redirect } from "react-router-dom";
import * as routes from "../routes/routes";
import ReviewPreview from './ReviewPreview';
import { connect } from 'react-redux';


function Home(props) {
  return (
    <>
      {
        <><DocsList/> <ReviewPreview/></>
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
)(withAuthorization(authCondition)(Home));