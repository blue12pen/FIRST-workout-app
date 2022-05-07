import { useEffect, useState, useRef } from 'react';
import { sendIsDone } from '../../context/dayActions';
import pushUpImg from '../../assets/push-up-img.jpg';

const WorkHour = ({ item, dayNumber }) => {
  //Destructuring props
  const { hour, isDone, exerciseList } = item;

  //using ref for the progress bar
  const bar = useRef();

  //using state fr the width of the bar
  const [width, setWidth] = useState(0);
  const [buttonClasses, setButtonClasses] = useState('');
  const [buttonContent, setButtonContent] = useState('');

  useEffect(() => {
    const checkTimeAndWidth = () => {
      const currentHour = new Date().getHours();
      const currentMinutes = new Date().getMinutes();

      if (currentHour < hour) {
        setWidth(0);
      } else if (currentHour > hour) {
        setWidth(100);
      } else if (currentHour === hour) {
        setWidth(Math.ceil(currentMinutes / 0.6));
      } else {
      }
    };

    checkTimeAndWidth();
    setInterval(checkTimeAndWidth, 60000);

    bar.current.style.width = `${width}%`;
  }, [width, hour]);

  useEffect(() => {
    if (isDone) {
      setButtonClasses('buttonInToday isDone');
      setButtonContent('\u2713');
    }
    if (!isDone && width === 100) {
      setButtonClasses('buttonInToday timeExpired');
      setButtonContent('\u2716');
    }
    if (!isDone && width < 100) {
      setButtonClasses('buttonInToday actual');
      setButtonContent('');
    }
  }, [isDone, width]);

  const changeButtonClassesAndContent = () => {
    if (buttonClasses === 'buttonInToday actual' && width < 100) {
      setButtonClasses('buttonInToday isDone');
      setButtonContent('\u2713');
    }
    if (buttonClasses === 'buttonInToday isDone' && width < 100) {
      setButtonClasses('buttonInToday actual');
      setButtonContent('');
    }
    if (buttonClasses === 'buttonInToday timeExpired' && width === 100) {
      setButtonClasses('buttonInToday isDone');
      setButtonContent('\u2713');
    }
    if (buttonClasses === 'buttonInToday isDone' && width === 100) {
      setButtonClasses('buttonInToday timeExpired');
      setButtonContent('\u2716');
    }
  };

  const handleDoubleClick = async (hourNumber) => {
    sendIsDone(hourNumber, dayNumber);
    changeButtonClassesAndContent();
  };

  return (
    <div className="hourWrapper">
      <div className="hour">{`${hour}:00`}</div>
      <button
        disabled={width === 0}
        className={buttonClasses}
        onDoubleClick={() => handleDoubleClick(hour)}
      >
        {buttonContent}
      </button>

      <div className="progressWrapper">
        <div className="progress">
          <div ref={bar} className="bar"></div>
        </div>
      </div>
      <div className="upperExcercisesListWrapper">
        <ul className="upperExcercisesList">
          {exerciseList &&
            exerciseList.map((excercise, index) => (
              <li key={index} className="excerciseNameAndRepeatsAndImage">
                <div className="repeatsAndName">
                  <div>{excercise.repeats}</div>
                  <div>{excercise.name}</div>
                </div>
                <div className="imageInExcerciseItemWrapper">
                  <img className="imageInExcerciseItem" src={excercise.imgUrl} alt="push-ups" />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkHour;
