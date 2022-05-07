import StartOrSee from '../components/2-content/StartOrSee';
import Clock from '../components/2-content/Clock';
import { useEffect, useContext } from 'react';
import DayContext from '../context/dayContext';
import { isDayStarted } from '../context/dayActions';

const StartPage = () => {
  const { days, day, dayStarted, dispatch } = useContext(DayContext);

  useEffect(() => {
    const getIsDayStarted = async () => {
      const dayStartedData = await isDayStarted();
      dispatch({ type: 'GET_DAY_STARTED', payload: dayStartedData });
    };

    getIsDayStarted();
  }, []);

  return (
    <div>
      <Clock appearance={'clockOnStartPage'} />
      <StartOrSee dayStarted={dayStarted} />
    </div>
  );
};

export default StartPage;
