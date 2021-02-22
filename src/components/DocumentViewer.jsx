import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { fetchPackageReviewById } from '../redux/thunks';
import * as newRequestApi from '../api/newRequestApi';
import { getReview } from '../redux/selectors';
import ExcelRenderer from '../custom_renderers/Excel';
import { getFileType } from '../utils';
import Stopwatch from './Stopwatch';

function DocumentViewer(props) {
  const { curReview } = props;
  const [keyToUrl, setKeyToUrl] = useState({}); // dict key: signedUrl
  const docs = [];

  useEffect(() => {
    const { id } = props;
    props.fetchReviewById(id);
  }, []);

  if (Object.entries(curReview) !== 0 && curReview.keys) {
    for (let i = 0; i < curReview.keys.length; i += 1) {
      const key = curReview.keys[i];
      if (key in keyToUrl) {
        docs.push({
          uri: keyToUrl[key],
          fileType: getFileType(key),
        });
      } else {
        newRequestApi.GetViewObjectSignedUrl(key).then(({ url }) => {
          setKeyToUrl({ ...keyToUrl, [key]: url });
        });
      }
    }
  } else {
    return 'Loading';
  }

  return (
    <div style={{ flex: '3' }}>
      <Stopwatch />
      <DocViewer
        key={curReview.docs + curReview.eventLog}
        style={{ height: '100%' }}
        pluginRenderers={[ExcelRenderer, ...DocViewerRenderers]}
        documents={docs}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  curReview: getReview(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviewById: (id) => dispatch(fetchPackageReviewById(id)),
});

DocumentViewer.propTypes = {
  curReview: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  fetchReviewById: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DocumentViewer);
