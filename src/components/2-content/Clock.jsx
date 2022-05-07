import { useState, useEffect } from 'react';

const Clock = ({ appearance }) => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return <div className={appearance}>{date.toLocaleTimeString('hr-HR')}</div>;
};

export default Clock;
