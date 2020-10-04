import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import formFields from "./formFields";
import _ from "lodash";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div key={ name }>
                <label>{ label }</label>
                <div>
                    {  formValues[name] }
                </div>
            </div>
        );
    });


    return(
        <div>
            <h5>Please confirm your entries.</h5>
            { reviewFields }
            <button className="yellow darken-3 btn-flat white-text" onClick={ onCancel }>
                Back
            </button>
            <button
                onClick={ () => submitSurvey(formValues, history) } 
                className="green btn-flat right white-text" >
                Send Survey
                <i className="material-icons right">
                    email
                </i>
            </button>
        </div>
    );
};


// state obj pulled from redux store => 
//    state = {auth: Obj, form: Obj};
//      values avaib in form.surveyForm.values
function mapStateToProps(state) {
    // return obj ends up as props on our component
    return {
        formValues: state.form.surveyForm.values
    };
}


// withRouter function => passes history object to SurveyFormReview as a prop
console.log(actions);
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));