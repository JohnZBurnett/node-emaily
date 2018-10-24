import React from 'react'; 

// shows users their form inputs for review 

const SurveyFormReview = ({onCancel}) => {
    return (
        <div>
            <h5>
                Please confirm your entries
            </h5>
            <button
              className="yellow darken-3 btn-flat"
              onClick={onCancel}
            >
              Cancel
            </button>
        </div>
    );
};

export default SurveyFormReview; 
