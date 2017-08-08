import React  from 'react';
import { changeApplicationFieldValue } from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ApplicationSelectField extends React.Component {
    constructor (props) {
        super(props);
        this.state = { selectValue: props[this.props.field] || null };
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps[this.props.field] !== this.props[this.props.field]) {
            this.setState({selectValue: nextProps[this.props.field]});
        }
    }
    updateValue (newValue) {
        this.setState({selectValue: newValue});
        this.props.changeApplicationFieldValue(this.props.field,newValue);
    }
    render() {
        let transFormedData = this.props.options;
        return (<div>
            <Select
                simpleValue
                options={transFormedData}
                clearable={true}
                name={"selected-"+this.props.field}
                value={this.state.selectValue}
                onChange={this.updateValue.bind(this)}
                searchable={this.props.searchable}
            />
        </div>);
    }
}
ApplicationSelectField.displayName = 'ApplicationSelectField';
ApplicationSelectField.defaultProps = {
    searchable: false
};

function mapStateToProps (state, ownProps) {
    let form = state.application.applicationForm;
    let { field } = ownProps;
    return {
        [field]: form ? form[field] : null,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeApplicationFieldValue}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationSelectField);
