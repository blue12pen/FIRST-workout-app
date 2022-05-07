import moment from 'moment';

// UTILITY FUNCTIONS
// function for finding today day number
function findDayNumber() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayNumber = Math.floor(diff / oneDay);
  return dayNumber;
}

// UTILITY FUNCTIONS
// function for finding day name
function findDayName() {
  const now = new Date().getDay();

  switch (now) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return null;
  }
}

// UTILITY FUNCTIONS
// function for finding day date
function findDayDate() {
  return new Date().getDate();
}

// UTILITY FUNCTIONS
// function for finding day month
function findDayMonth() {
  return new Date().getMonth() + 1;
}

// UTILITY FUNCTIONS
// function for finding day year
function findDayYear() {
  return new Date().getFullYear();
}

// UTILITY FUNCTIONS
// function
function setStartingHourAndRepetitionsAndWorkingHoursArray() {
  const startHour = new Date().getHours();
  const repetitions = 5;
  const workingHoursArray = [];
  for (let i = 0; i < repetitions; i++) {
    let h = startHour + i * 2;
    if (h < 24) {
      workingHoursArray.push({
        hour: h,
        isDone: false,
        exerciseList: [
          // { excerciseName: 'push-ups', repeats: 10 },
          // { excerciseName: 'squats', repeats: 5 },
        ],
      });
    } else {
      break;
    }
  }
  return [startHour, repetitions, workingHoursArray];
}

// UTILITY FUNCTIONS
// function for settinng week number Id
function setWeekId() {
  return moment().week();
}

//########################################################################################################
//########################################################################################################
//########################################################################################################
//########################################################################################################
//########################################################################################################
//########################################################################################################
//########################################################################################################

export const fetchDays = async () => {
  const response = await fetch(`http://localhost:5000/days`);
  const data = await response.json();

  return data;
};

export const isDayStarted = async () => {
  const response = await fetch(`http://localhost:5000/days`);
  const data = await response.json();

  const dayNumber = findDayNumber();
  if (data.length === dayNumber) {
    return true;
  } else {
    return false;
  }
};

//POST REQUEST TO BACKEND
export const startNewDay = async () => {
  const bodyData = {
    id: findDayNumber(),
    dayNumber: findDayNumber(),
    dayName: findDayName(),
    dayDate: findDayDate(),
    dayMonth: findDayMonth(),
    dayYear: findDayYear(),
    dayStartingHour: setStartingHourAndRepetitionsAndWorkingHoursArray()[0],
    dayWorkingRepetitions: setStartingHourAndRepetitionsAndWorkingHoursArray()[1],
    dayWorkingHours: setStartingHourAndRepetitionsAndWorkingHoursArray()[2],
    weekId: setWeekId(),
  };

  const response = await fetch(`http://localhost:5000/days`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });

  const data = await response.json();
  return data;
};

//fetch Today
export const fetchToday = async () => {
  const dayNumber = findDayNumber();

  const response = await fetch(`http://localhost:5000/days/${dayNumber}`);
  const data = await response.json();

  return data;
};

//PATCH today
export const sendIsDone = async (hourNumber, dayNumber) => {
  const { dayWorkingHours } = await fetchToday();
  const index = dayWorkingHours.findIndex((element) => element.hour === hourNumber);

  const newArray = [...dayWorkingHours];
  const changedProperty = !newArray[index].isDone;
  newArray[index] = { ...newArray[index], isDone: changedProperty };

  const bodyData = {
    dayWorkingHours: newArray,
  };

  const response = await fetch(`http://localhost:5000/days/${dayNumber}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });
  const data = await response.json();
  return data;
};

//PATCH Excercise list
export const sendExcercises = async (hourNumber, dayNumber) => {
  const { dayWorkingHours } = await fetchToday();
  const index = dayWorkingHours.findIndex((element) => element.hour === hourNumber);

  const newArray = [...dayWorkingHours];
  const changedProperty = !newArray[index].isDone;
  newArray[index] = { ...newArray[index], isDone: changedProperty };

  const bodyData = {
    dayWorkingHours: newArray,
  };

  const response = await fetch(`http://localhost:5000/days/${dayNumber}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });
  const data = await response.json();
  return data;
};
