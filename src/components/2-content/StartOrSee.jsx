import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { startNewDay } from '../../context/dayActions';
import { useContext } from 'react';
import DayContext from '../../context/dayContext';

const StartOrSee = ({ dayStarted }) => {
  const { dispatch } = useContext(DayContext);

  const navigate = useNavigate();

  const handleClick = () => {
    if (dayStarted) {
      navigate('/today');
    } else {
      startNewDay();
      dispatch({ type: 'START_NEW_DAY' });
    }
  };

  return (
    <div className="startWrapper">
      <Link to={dayStarted ? '/today' : '/'}>
        <button
          className={dayStarted ? 'startButton seeToday' : 'startButton'}
          onClick={handleClick}
        >
          {dayStarted ? 'See Today' : 'START DAY'}
        </button>
      </Link>
    </div>
  );
};

// StartOrSee.propTypes = {
//   dayStarted: PropTypes.bool || PropTypes.string,
// };

export default StartOrSee;
