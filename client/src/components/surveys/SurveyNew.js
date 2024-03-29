import { useState } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
  const [isFormReady, setIsFormReady] = useState(false);

  const handleSetFormReady = () => {
    setIsFormReady(true);
  };
  const handleCancelFormReady = () => {
    setIsFormReady(false);
  };

  return (
    <div>
      {isFormReady ? (
        <SurveyFormReview handleCancelFormReady={handleCancelFormReady} />
      ) : (
        <SurveyForm handleSetFormReady={handleSetFormReady} />
      )}
    </div>
  );
};

export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
