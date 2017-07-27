import React, { Component } from 'react';
import apiFetch from '../../actions';
import ApplicationTimeSeries from './ApplicationTimeSeries';
import {
    Grid,
    Header,
    Segment,
    Statistic
} from 'semantic-ui-react'

class ExecDashboard extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data: {
                'interest_count': 0,
            }
        };
    }

    componentDidMount() {
         this.fetchData();
         this.props.fetchApplications();
    }
    fetchData() {
        return apiFetch('exec/dashboard')
            .then((response) => response.json())
            .then((json) => {
                if(json.success) {
                    this.setState({data: json.data});
                }
            });
    }


    render () {

        return (
            <div>
                <Grid columns={2} stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h3' dividing>Some Numbers</Header>
                            <Segment inverted>
                            <Statistic.Group horizontal size="large">
                                <Statistic inverted label='Interest Signups' value={this.state.data.interest_count} color="grey" />
                                <Statistic inverted label='Total Applications' value={this.props.exec.application_list.length} color="orange" />
                                <Statistic inverted label='Completed Applications' value={this.props.exec.application_list.filter(app=>app.completed).length} color="green"/>
                            </Statistic.Group>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h3' dividing># Of Applications Created Per Day</Header>
                            <ApplicationTimeSeries data={this.props.exec.application_list} />
                        </Grid.Column>
                    </Grid.Row>

                    {/*<Grid.Row>*/}
                    {/*<Grid.Column>*/}
                    {/*<Image src='/assets/images/wireframe/paragraph.png' />*/}
                    {/*</Grid.Column>*/}
                    {/*<Grid.Column>*/}
                    {/*<Image src='/assets/images/wireframe/paragraph.png' />*/}
                    {/*</Grid.Column>*/}
                    {/*<Grid.Column>*/}
                    {/*<Image src='/assets/images/wireframe/paragraph.png' />*/}
                    {/*</Grid.Column>*/}
                    {/*</Grid.Row>*/}
                </Grid>
            </div>

        );
    }
}

//now the redux integration layer
import {
    fetchApplications
} from '../../actions/exec';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
function mapStateToProps (state) {
    return {
        exec: state.exec,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchApplications
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ExecDashboard);
