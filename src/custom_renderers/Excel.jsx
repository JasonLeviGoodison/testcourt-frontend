import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ExcelDocsMap = {
  xls: ['xls', 'application/vnd.ms-excel'],
  xlsx: [
    'xlsx',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ],
};

const ExcelRenderer = ({ mainState: { currentDocument } }) => {
  if (!currentDocument) return null;

  return (
    <Container id="msdoc-renderer">
      <IFrame
        id="msdoc-iframe"
        title="msdoc-iframe"
        src={`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
          currentDocument.uri,
        )}`}
        frameBorder="0"
      />
    </Container>
  );
};

ExcelRenderer.propTypes = {
  mainState: PropTypes.object.isRequired,
};

ExcelRenderer.fileTypes = [
  ...ExcelDocsMap.xls,
  ...ExcelDocsMap.xlsx,
];

ExcelRenderer.weight = 0;
ExcelRenderer.fileLoader = ({ fileLoaderComplete }) => fileLoaderComplete();

const Container = styled.div`
  width: 100%;
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

export default ExcelRenderer;
