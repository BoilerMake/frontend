import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class ExecCreateAnnouncement extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.createAnnouncement(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.TextArea label='Announcement' placeholder='Announcement Text' value={this.state.value} onChange={this.handleChange} />
                </Form.Group>
                <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
            </Form>
        );
    }
}
export default ExecCreateAnnouncement;
