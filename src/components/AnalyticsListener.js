import React from 'react';
import GoogleAnalytics from 'react-ga';
import PropTypes from 'prop-types';
import { recordStatEvent } from '../actions'
export default class AnalyticsListener extends React.PureComponent {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        this.sendPageView(this.context.router.history.location);
        this.context.router.history.listen(this.sendPageView.bind(this));
    }

    sendPageView(location) {
        recordStatEvent("page_hit",location.pathname,location);
        GoogleAnalytics.set({ page: location.pathname });
        GoogleAnalytics.pageview(location.pathname);
    }

    render() {
        return null;
    }
}