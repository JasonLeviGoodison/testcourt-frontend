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
import ReviewEventLog from './ReviewEventLog';

function Review(props) {
  const id = props.match.params.id;
  return (
    // <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
    //     <div style={{display: 'flex', flexDirection: 'row'}}>
          <><DocumentViewer id={id}/> <div style={{flex: '2', overflow: 'scroll'}}><CheckList id={id}/><ReviewEventLog id={id}/> </div></>

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