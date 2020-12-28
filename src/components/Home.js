import React from 'react';
import DocsList from './DocsList'
import CheckList from './CheckList';
import DocumentViewer from './DocumentViewer';
import AuthUserContext from "../auth/AuthUserContext";
import withAuthorization from "../auth/withAuthorization";
import { Redirect } from "react-router-dom";
import * as routes from "../routes/routes";

function Home() {
  return (
    <>
      <DocsList/>
      <DocumentViewer/>
      <CheckList/>
    </>
  );
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Home);