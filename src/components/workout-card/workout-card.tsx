// components/WorkoutCard.js
import React from 'react';
import './workout-card.modules.css';
import Image from 'next/image';

const WorkoutCard = ({ workout }: any) => {
  return (
    <div className="workout-card">
      <div className="image-container">
        <Image loading='eager' src={workout.image.url} alt="Workout" width={200} height={100}/>
      </div>
      <div className="workout-info">
        <h3>{workout.name}</h3>
      </div>
    </div>
  );
};

export default WorkoutCard;
