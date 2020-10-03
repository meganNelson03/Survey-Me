// shows a form for user to add input
// this.handleSubmit <= provided by the redux form connect
import _ from "lodash";
import { reduxForm, Field } from "redux-form"; // reduxForm calls action create, update state in redux store (basically the connect helper)
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";

const FIELDS = [
    {label: "Survey Title", name: "title"},
    {label: "Subject Line", name: "subject"},
    {label: "Email Body", name: "body"},
    {label: "Recipient List", name: "emails"}
];

class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                 { this.renderFields() }
                 <Link to="/surveys" className="red btn-flat white-text">
                     Cancel
                 </Link>
                 <button className="teal btn-flat right white-text" type="submit">
                    Next
                    <i className="material-icons right">done</i>
                 </button>
                </form>
            </div>
        );
    }

}

// validate form input
function validate(values) {
    const errors = {};


    _.each(FIELDS, ({ name }) => {
        // have to use sq. bracket property to figure out name ref during runtime
        if (!values[name]) {
            errors[name] = "You must provide a " + name + "." 
        }
    });

    // if errors obj is empty, redux-form assumes form is valid
    return errors;
}

export default reduxForm({
    validate,
    form: "surveyForm"
})(SurveyForm);