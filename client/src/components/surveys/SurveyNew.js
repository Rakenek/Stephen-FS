import { useState } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
  const [isFormReady, setIsFormReady] = useState(false);

  const handleSetFormReady = () => {
    setIsFormReady(true);
  };
  return (
    <div>
      {isFormReady ? (
        <SurveyFormReview />
      ) : (
        <SurveyForm handleSetFormReady={handleSetFormReady} />
      )}
    </div>
  );
};

export default SurveyNew;
