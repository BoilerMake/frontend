import React, { Component } from 'react';
import { changeApplicationFieldValue, fetchSchoolList } from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ApplicationTextField extends Component {
    constructor (props) {
        super(props);
        this.state = { selectValue: props.school_id || null };
    }
    componentDidMount() {
        this.props.fetchSchoolList();
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.school_id !== this.props.school_id) {
            this.setState({selectValue: nextProps.school_id});
        }
    }
    updateValue (newValue) {
        console.log('School changed to ' + newValue);
        this.setState({
            selectValue: newValue
        });
        this.props.changeApplicationFieldValue('school_id',newValue);
    }
    render() {
        let transFormedData = this.props.schools.map((school)=>({value: school.id, label: school.name}));
        return (<div>
            <Select ref="schoolSelect"
                    simpleValue
                    options={transFormedData}
                    clearable={true}
                    name="selected-school"
                    value={this.state.selectValue}
                    onChange={this.updateValue.bind(this)}
                    searchable={true}
            />
        </div>);
    }
}

function mapStateToProps (state) {
    let form = state.application.applicationForm;
    return {
        school_id: form ? form.school_id : null,
        schools: state.application.schools,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeApplicationFieldValue, fetchSchoolList}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTextField);
