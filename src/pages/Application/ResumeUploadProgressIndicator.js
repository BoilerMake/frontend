import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'rc-progress';

const ResumeUploadProgressIndicator = ({application}) => {
    return application.isResumeUploading
        ? <Line percent={application.uploadProgress} strokeWidth="1" strokeColor="#1A2A50"/>
        : null;
};
const mapStateToProps = (state) => {
    return {
        application: state.application
    };
};
export default connect(mapStateToProps)(ResumeUploadProgressIndicator);
