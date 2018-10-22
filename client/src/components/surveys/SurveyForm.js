import React, { Component } from 'react';
import  { reduxForm, Field} from 'redux-form'; 

// SurveyForm shows a form for a user to add input 
class SurveyForm extends Component {
    render() {
        return(
            <div>
                <form 
                    onSubmit={this.props.handleSubmit( values => console.log(values))}
                >
                    <Field 
                    type="text"
                    name="surveyTitle"
                    component="input"
                    />
                </form>
                <button type="submit">Submit</button>
            </div>
        ); 
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm); 