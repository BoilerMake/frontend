import React from 'react';
import { changeApplicationFieldValue } from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ApplicationToggle = ({changeApplicationFieldValue, field, applicationForm, disabled, isLoading, styles}) => (
    <div>
        <label className="switch">
            <input
                style={ styles }
                disabled={(disabled || false) || isLoading} //disable the input if: disabled (default false) OR isLoading
                value={applicationForm[field]}
                onChange={
                    (e) => changeApplicationFieldValue(field,!applicationForm[field])
                }
                type="checkbox"
            />
            <span className="slider"></span>
        </label>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationToggle);
