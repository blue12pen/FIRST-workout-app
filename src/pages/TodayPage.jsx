import { useEffect, useContext } from 'react';
import DayContext from '../context/dayContext';
import { fetchToday } from '../context/dayActions';

import WorkHour from '../components/2-content/WorkHour';
import ExcercisesList from '../components/2-content/ExcercisesList';

const TodayPage = () => {
  const { day, dispatch } = useContext(DayContext);

  useEffect(() => {
    const getFetchToday = async () => {
      const todayData = await fetchToday();
      dispatch({ type: 'GET_TODAY', payload: todayData });
    };

    getFetchToday();
  }, [dispatch]);

  const { dayNumber, dayName, dayDate, dayMonth, dayYear, dayWorkingHours } = day;

  return (
    <div className="wrapper">
      {dayName !== undefined ? (
        <div className="todayTitle">
          <span className="dayName">{dayName}</span>
          <span className="dayDate">{`${dayDate}.${dayMonth}.${dayYear}.`}</span>
        </div>
      ) : (
        <p className="infoMessage">Today is not started yet ...</p>
      )}

      <>
        <div className="todayExercises">
          {dayWorkingHours &&
            dayWorkingHours.map((item) => (
              <WorkHour key={item.hour} item={item} dayNumber={dayNumber} />
            ))}
        </div>
        <br />
        <hr />
        <div className="excerciseListContainer">
          <ExcercisesList />
        </div>
      </>
    </div>
  );
};

export default TodayPage;
