// SurveyField contains logic to render a single label & text input
import React from "react";

// { input } peels the input off of props.input, etc, etc
// meta prop <= for validation (meta.error on Subject Title => "You must provide a title")
export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} autoComplete="off" style={{ marginBottom: "5px" }}/>
            <div className="red-text" style={{ marginBottom: "20px"}}>
                { touched && error }
            </div>
        </div>
    );
}