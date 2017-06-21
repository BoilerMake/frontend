import React from 'react';
import GoogleAnalytics from 'react-ga';
import PropTypes from 'prop-types';

export default class GAListener extends React.PureComponent {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        this.sendPageView(this.context.router.history.location);
        this.context.router.history.listen(this.sendPageView);
    }

    sendPageView(location) {
        GoogleAnalytics.set({ page: location.pathname });
        GoogleAnalytics.pageview(location.pathname);
    }

    render() {
        return null;
    }
}
