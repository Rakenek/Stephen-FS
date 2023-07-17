import { Field, reduxForm } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' },
];

const SurveyForm = ({ handleSubmit }) => {
  const renderFields = () => {
    return (
      <div>
        {FIELDS.map((field) => {
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
        <form onSubmit={handleSubmit((values) => console.log(values))}>
          {renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

  return render();
};

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
