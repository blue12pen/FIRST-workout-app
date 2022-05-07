import { useState } from 'react';
import useImage from '../../hooks/useImage';

const Excercise = ({ excerciseImageName, excerciseName }) => {
  const [excerciseRepetitions, setExcerciseRepetitions] = useState(0);

  const { image } = useImage(excerciseImageName);

  const handleIncrementAndDecrement = (e) => {
    if (e.target.className === 'decrement') {
      setExcerciseRepetitions((prevState) => {
        if (prevState < 1) {
          // call function for shaking
          return 0;
        } else {
          return prevState - 1;
        }
      });
    }
    if (e.target.className === 'increment') {
      setExcerciseRepetitions((prevState) => {
        return parseInt(prevState) + 1;
      });
    }
  };

  return (
    <div className="excerciseWrapper">
      <div className="inputWrapper">
        <span className="decrement" onClick={(e) => handleIncrementAndDecrement(e)}>
          −
        </span>
        <div>
          <input
            type="number"
            name="excerciseRepetitions"
            id="excerciseRepetitions"
            min={0}
            className="inputNumber"
            value={excerciseRepetitions}
            onChange={(e) => {
              setExcerciseRepetitions(e.target.value);
            }}
          />
        </div>
        <span className="increment" onClick={(e) => handleIncrementAndDecrement(e)}>
          +
        </span>
      </div>
      <div className="excerciseImageWrapper">
        <img className="excerciseImage" src={image} alt="excerciseImg" />
      </div>
      <div className="excerciseName">{excerciseName}</div>
    </div>
  );
};

export default Excercise;
