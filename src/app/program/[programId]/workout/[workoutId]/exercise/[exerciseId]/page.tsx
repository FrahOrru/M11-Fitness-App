"use client";
import React from 'react';
import ProgressBar from '@/components/progress-bar/progress-bar';
import { sdk } from '@/lib/client';
import Link from 'next/link';

export default async function ExerciseDetail({ params } : any ) {
  const { programId, workoutId, exerciseId } = params;

  const exercises = await sdk.Exercises();

  const exercise = exercises.data.exercises.find((exe) => exe.id === exerciseId)

  return (
    <div className="exercise-screen">
      <div className="header">
        <Link href={'../'}>
          <button className="backButton">&lt;</button>
        </Link>
      </div>
      <div className="videoContainer">
        <video className="video" muted autoPlay loop>
          <source src={exercise?.video?.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="timer">{exercise?.repetition}</div>
        </div>
      </div>
      <div className="progressContainer">
        <ProgressBar duration={exercise?.repetition} />
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
