import React from 'react';
import { changeApplicationFieldValue } from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ApplicationTextField = ({changeApplicationFieldValue, field, applicationForm, disabled, isLoading}) => (
    <input
        disabled={(disabled || false) || isLoading} //disable the input if: disabled (default false) OR isLoading
        value={applicationForm[field] || ""} //react is unhappy with value being null
        onChange={
            (e) => changeApplicationFieldValue(field,e.target.value)
        }
    />
);

function mapStateToProps (state) {
    return {
        applicationForm: state.application.applicationForm,
        isLoading: state.application.isLoading
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeApplicationFieldValue}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTextField);
