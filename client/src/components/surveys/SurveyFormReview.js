import { useSelector } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ handleCancelFormReady }) => {
  const formValues = useSelector((state) => state.form.surveyForm.values);

  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={label}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{reviewFields}</div>

      <button
        className="yellow white-text darken-3 btn-flat"
        onClick={handleCancelFormReady}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => {
          actions.submitSurvey(formValues);
        }}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

export default SurveyFormReview;
