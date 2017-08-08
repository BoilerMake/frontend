import React from 'react';
import { changeApplicationFieldValue } from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ApplicationToggle = ({changeApplicationFieldValue, field, applicationForm, disabled, isLoading, styles}) =>
    <span className="checkbox">
        <input
            style={ styles }
            disabled={(disabled || false) || isLoading} //disable the input if: disabled (default false) OR isLoading
            checked={applicationForm[field] || false}
            onChange={(e) => changeApplicationFieldValue(field,e.target.checked)}
            type="checkbox"
            id={ `cb-${field}` }
        />
        <label htmlFor={ `cb-${field}` }>
            <span></span>
        </label>
    </span>


function mapStateToProps (state) {
    return {
        applicationForm: state.application.applicationForm,
        isLoading: state.application.isLoading
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeApplicationFieldValue}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationToggle);
