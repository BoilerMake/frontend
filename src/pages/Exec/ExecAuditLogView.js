import React from 'react';
import moment from 'moment';
const ExecAuditLogView = ({audits}) => {
    // return(<pre>{JSON.stringify(audits,null,2)}</pre>);
    return(<div>
        {audits.map(audit=> {
            let when = moment(audit.created_at);
            let { old_values, new_values } = audit;
            return(<div key={audit.id}>
                {when.fromNow()} <i>({when.format()})</i>
                <pre>{JSON.stringify({ old_values, new_values },null,2)}</pre>
            </div>)
        })}
    </div>)
};
ExecAuditLogView.displayName = 'ExecAuditLogView';
export default ExecAuditLogView;
