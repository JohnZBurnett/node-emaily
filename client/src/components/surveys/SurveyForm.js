import React, { Component } from 'react';
import  { reduxForm, Field} from 'redux-form'; 

// SurveyForm shows a form for a user to add input 
class SurveyForm extends Component {
    render() {
        return(
            <div>
                <Field 
                  type="text"
                  name="surveyTitle"
                  component="input"
                />
            </div>
        ); 
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm); 