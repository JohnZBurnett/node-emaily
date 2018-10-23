import React, { Component } from 'react';

// SurveyField contains logic to render a single label and text input
export default ({ input, label}) => {
    return(
        <div>
            <label>{label}</label>
            <input {...input}/>
        </div>
    )
}
