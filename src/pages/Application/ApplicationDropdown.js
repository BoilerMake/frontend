import React from 'react';
import { changeApplicationFieldValue } from '../../actions/application';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ApplicationTextField = ({changeApplicationFieldValue, field, applicationForm, disabled, isLoading, styles, options}) => (
    <select
      value={applicationForm[field] || ""}
      onChange={
        (e) => changeApplicationFieldValue(field,e.target.value)
      }
      disabled={(disabled || false) || isLoading}
      className="dropdown"
    >
        { Object.keys(options).map((t,i) => <option key={i} value={t}>{t}</option>) }
        {/* <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option> */}
    </select>
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
