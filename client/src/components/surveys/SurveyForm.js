import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

const SurveyForm = ({ handleSubmit, handleSetFormReady }) => {
  const renderFields = () => {
    return (
      <div>
        {formFields.map((field) => {
          return (
            <Field
              key={field.label}
              label={field.label}
              type="text"
              name={field.name}
              component={SurveyField}
            />
          );
        })}
      </div>
    );
  };

  const render = () => {
    return (
      <div>
        <form onSubmit={handleSubmit(handleSetFormReady)}>
          {renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  };

  return render();
};

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
