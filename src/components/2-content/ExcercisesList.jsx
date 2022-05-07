import Excercise from './Excercise';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ExcercisesList = () => {
  const arrayOfExcercisesData = [
    {
      imageName: 'jumping-jacks-img.jpg',
      name: 'jumping jacks',
    },
    {
      imageName: 'burpees-img.jpg',
      name: 'burpees',
    },
    {
      imageName: 'wall-sit-img.jpg',
      name: 'wall sit',
    },
    {
      imageName: 'high-knees-img.jpg',
      name: 'high knees',
    },
    {
      imageName: 'push-up-img.jpg',
      name: 'push up',
    },
    {
      imageName: 'sit-ups-img.jpg',
      name: 'sit ups',
    },
    {
      imageName: 'squats-img.jpg',
      name: 'squats',
    },
  ];

  return (
    <ul className="excercisesList">
      {arrayOfExcercisesData.map((excercise, index) => (
        <li className="excercisesListItem">
          <Excercise excerciseImageName={excercise.imageName} excerciseName={excercise.name} />
        </li>
      ))}
    </ul>
  );
};

export default ExcercisesList;
