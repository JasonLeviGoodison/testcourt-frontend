import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const Mp4DocsMap = {
  mp4: ['mp4', 'application/mp4'],
};

const Mp4Renderer = ({ mainState: { currentDocument } }) => {
  if (!currentDocument) return null;

  return (
    <Container id="mp4-renderer">
      <div style={{ flex: 1 }}>
        <ReactPlayer
          url={currentDocument.uri}
          controls
          width="100%"
          height="auto"
          config={{
            forceHSL: true,
          }}
          playbackRate={1.0}
          onError={(e) => console.log('onError', e)}
        />
      </div>
    </Container>
  );
};

Mp4Renderer.propTypes = {
  mainState: PropTypes.object.isRequired,
};

Mp4Renderer.fileTypes = [
  ...Mp4DocsMap.mp4,
];

Mp4Renderer.weight = 0;
Mp4Renderer.fileLoader = ({ fileLoaderComplete }) => fileLoaderComplete();

const Container = styled.div`
  width: 100%;
`;

export default Mp4Renderer;
