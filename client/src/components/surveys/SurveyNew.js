import React, { Component } from 'react';
import SurveyForm from './SurveyForm'; 
import SurveyFormReview from './SurveyFormReview'; 

// SurveyNew shows SurveyForm and SurveyFormReview
class SurveyNew extends Component {

    state = {
        showFormReview: false
    }; 

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview />
        } else {
            return <SurveyForm />
        }
    }

    render() {
        return(
            <div>
                <SurveyForm />
            </div>
        ); 
    }
}

export default SurveyNew; 