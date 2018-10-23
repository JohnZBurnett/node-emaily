import React, { Component } from 'react';

// SurveyField contains logic to render a single label and text input
export default ({ input, label, meta: { error, touched }}) => {
    console.log("META: ", meta);
    return(
        <div>
            <label>{label}</label>
            <input {...input}/>
            {touched && error ? error : null}
        </div>
    )
}
