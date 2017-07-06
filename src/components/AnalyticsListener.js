import React from 'react';
import GoogleAnalytics from 'react-ga';
import PropTypes from 'prop-types';

export default class AnalyticsListener extends React.PureComponent {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        this.sendPageView(this.context.router.history.location);
        this.context.router.history.listen(this.sendPageView.bind(this));
    }

    sendPageView(location) {
        this.props.recordEvent("page_hit",location.pathname,location);
        GoogleAnalytics.set({ page: location.pathname });
        GoogleAnalytics.pageview(location.pathname);
    }

    render() {
        return null;
    }
}
import { connect } from 'react-redux'
import { recordEvent } from '../actions/users';

const mapDispatchToProps = (dispatch, ownProps) => ({
    recordEvent: (event, subtitle, context) => {dispatch(recordEvent(event, subtitle, context))}
});

export default connect(null, mapDispatchToProps)(AnalyticsListener);