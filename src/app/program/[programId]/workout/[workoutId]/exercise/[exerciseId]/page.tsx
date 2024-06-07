"use client";
import React from 'react';
import ProgressBar from '@/components/progress-bar/progress-bar';

export default function ExerciseDetail({ params } : any ) {
  const { programId, workoutId, exerciseId } = params;

  return (
    <div className="exercise-screen">
      <div className="header">
        <button className="backButton">&lt;</button>
      </div>
      <div className="videoContainer">
        <video className="video" controls>
          <source src="/videos/workout.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="timer">10</div>
        </div>
      </div>
      <div className="progressContainer">
        <ProgressBar duration={30} />
        <div className="exercise">Explosive neg. Push Ups {programId + ' ' + workoutId + ' ' + exerciseId} </div>
      </div>
      <div className="controls">
        <button className="prevButton">Previous</button>
        <button className="nextButton">Next</button>
      </div>
      <div className="footer">
        <button className="seeAllButton">See all</button>
      </div>
    </div>
  );
}
