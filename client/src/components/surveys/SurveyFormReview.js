import { useDispatch, useSelector } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ handleCancelFormReady, history }) => {
  const formValues = useSelector((state) => state.form.surveyForm.values);
  const dispatch = useDispatch();

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
          dispatch(actions.submitSurvey(formValues, history));
        }}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

export default withRouter(SurveyFormReview);
