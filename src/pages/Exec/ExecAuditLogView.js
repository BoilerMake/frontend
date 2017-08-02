import React from 'react';
import moment from 'moment';
const ExecAuditLogView = ({audits}) => {
    return(<pre>{JSON.stringify(audits,null,2)}</pre>);
};
ExecAuditLogView.displayName = 'ExecAuditLogView';
export default ExecAuditLogView;
