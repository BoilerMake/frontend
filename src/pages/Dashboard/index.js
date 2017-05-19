import React, { Component } from 'react';
class Dashboard extends Component {
    render () {
        return (
            <div>
                <h1>Dashboard</h1>
                <pre>
                    {JSON.stringify(this.props.user,null, 2)}
                </pre>
            </div>
        );
    }
}

//now the redux integration layer
import { connect } from 'react-redux'
function mapStateToProps (state) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);