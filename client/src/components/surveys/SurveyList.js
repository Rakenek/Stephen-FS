import { fetchSurveys } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const SurveyList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSurveys());
  }, []);
  const surveys = useSelector((state) => state.surveys);
  console.log(surveys);

  const renderSurveys = () => {
    return surveys.reverse().map((survey) => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content text-white">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On:{new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="#">Yes: {survey.yes}</a>
            <a href="#">No: {survey.no}</a>
          </div>
        </div>
      );
    });
  };

  return <div>{renderSurveys()}</div>;
};

export default SurveyList;
