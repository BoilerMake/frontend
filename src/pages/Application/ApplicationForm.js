import React, { Component } from 'react';
class Application extends Component {

    constructor (props) {
        super(props);
        this.state = {
            application: {},
            me: {}
        };
    }

    componentDidMount() {
        this.seedState(this.props);
        this.props.fetchApplication();
    }

    componentWillReceiveProps(nextProps) {
        this.seedState(nextProps)
    }

    seedState(props) {
        if (!props.user.loading && props.user.me && !props.application.loading ) {
            this.setState({me: props.user.me, application: props.application.application});
        }
    }

    applicationTextChange(prop,e) {
        this.setState({application: {
            ...this.state.application,
            [prop]: e.target.value,
        }});
    }
    toggleItem(item) {
        this.setState({application: {
            ...this.state.application,
            [item]: !this.state.application[item]
        }});
    }

    saveApplication() {
        this.props.updateApplication(this.state.application);
    }

    render () {
        const app = this.state.application;
        const isLoading = this.props.application.loading;
        const isGithubLinked = this.state.me.github_user_id !== null;
        return (
            <div>
                First Name <input value={app.first_name} onChange={this.applicationTextChange.bind(this,"first_name")}/>
                <br/>
                Last Name <input value={app.last_name} onChange={this.applicationTextChange.bind(this,"last_name")}/>
                <br/>

                <div>LinkedIn
                    {
                        app.has_no_linkedin
                            ? <a>You indicated you don't have a Linedin <button onClick={this.toggleItem.bind(this,'has_no_linkedin')}>i do!</button></a>
                            : <div>
                                <input value={app.linkedin} onChange={this.applicationTextChange.bind(this,"linkedin")}/>
                                <button onClick={this.toggleItem.bind(this,'has_no_linkedin')}>i don't have one</button>
                              </div>
                    }
                </div>
                <br/>
                Github <input disabled={isGithubLinked} value={app.github} onChange={this.applicationTextChange.bind(this,"github")}/>
                {isGithubLinked ? <i>You signed up with github, so you can't change the username</i> : null}
                <br/>


                <button disabled={isLoading} onClick={this.saveApplication.bind(this)}>save</button>
                <hr/>
                <pre>{JSON.stringify(this.state.application,null, 2)}</pre>

            </div>
        );
    }
}

//now the redux integration layer
import { fetchApplication, updateApplication } from '../../actions/application';
import { connect } from 'react-redux'
function mapStateToProps (state) {
    return {
        user: state.user,
        application: state.application
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchApplication: () => {
        dispatch(fetchApplication());
    },
    updateApplication: (data) => {
        dispatch(updateApplication(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
