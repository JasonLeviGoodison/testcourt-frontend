import React from 'react';
import DocsList from './DocsList'
import CheckList from './CheckList';
import DocumentViewer from './DocumentViewer';

function Home() {
  return (
    <>
        <DocsList/>
        <DocumentViewer/>
        <CheckList/>
    </>
  );
}

export default Home;