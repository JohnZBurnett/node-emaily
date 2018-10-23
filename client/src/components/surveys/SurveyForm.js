import React, { Component } from 'react';
import  { reduxForm, Field} from 'redux-form'; 
import SurveyField from './SurveyField'; 

// SurveyForm shows a form for a user to add input 
class SurveyForm extends Component {

    renderFields() {
        return(
            <div>
                <Field 
                  type="text" 
                  name="title" 
                  label="Survey Title" 
                  component={SurveyField} 
                />
                <Field 
                  type="text" 
                  name="title" 
                  label="Subject Line" 
                  component={SurveyField} 
                />
                <Field 
                  type="text" 
                  name="title" 
                  label="Email Body" 
                  component={SurveyField} 
                />
                <Field 
                  type="text" 
                  name="title" 
                  label="Recipient List" 
                  component={SurveyField} 
                />
            </div>
        );
    }
    render() {
        return(
            <div>
                <form 
                    onSubmit={this.props.handleSubmit( values => console.log(values))}
                >
                {this.renderFields()}
                <button type="submit">Submit</button>
                </form>
            </div>
        ); 
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm); 