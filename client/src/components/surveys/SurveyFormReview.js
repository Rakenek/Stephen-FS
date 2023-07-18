import { useSelector } from 'react-redux';

const SurveyFormReview = ({ handleCancelFormReady }) => {
  const formData = useSelector((state) => state.form.surveyForm.values);
  //const formValues = formData.surveyForm.values;
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <ul>
        <li>Survey title: {formData.title}</li>
        <li>Subject line: {formData.subject}</li>
        <li>Email body: {formData.body}</li>
        <li>Recipient list: {formData.emails}</li>
      </ul>

      <button
        className="yellow darken-3 btn-flat"
        onClick={handleCancelFormReady}
      >
        Back
      </button>
    </div>
  );
};

export default SurveyFormReview;
