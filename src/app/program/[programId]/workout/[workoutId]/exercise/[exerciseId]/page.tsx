"use client";

import React, { useState, useEffect } from 'react';
import ProgressBar from '@/components/progress-bar/progress-bar';
import { sdk } from '@/lib/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Asset {
  __typename?: "Asset";
  id: string;
  url: string;
}

interface Exercise {
  __typename?: "Exercise";
  id: string;
  description?: string | null;
  name?: string | null;
  repetition?: number | null;
  image?: Asset | null;
  video?: Asset | null;
}

interface Workout {
  __typename?: "Workout";
  id: string;
  exercises: Exercise[];
}

interface ExerciseDetailProps {
  params: {
    programId: string;
    workoutId: string;
    exerciseId: string;
  };
}

export default function ExerciseDetail({ params }: ExerciseDetailProps) {
  const { programId, workoutId, exerciseId } = params;
  const router = useRouter();

  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const exercises = await sdk.Exercises();
        const foundExercise = exercises.data.exercises.find((exe: Exercise) => exe.id === exerciseId);
        setExercise(foundExercise || null);
        setCountdown(foundExercise?.repetition || 0);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching exercise:", error);
      }
    };

    fetchExercise();
  }, [exerciseId]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => (prevCountdown !== null ? prevCountdown - 1 : 0));
      }, 1000);
    } else if (countdown === 0) {
      fetchNextExercise();
    }

    return () => clearInterval(timer);
  }, [countdown]);

  const fetchNextExercise = async () => {
    try {
      const workoutResponse = await sdk.Workouts();
      const currentWorkout = workoutResponse.data.workouts.find((workout: Workout) => workout.id === workoutId);

      if (currentWorkout) {
        const currentExerciseIndex = currentWorkout.exercises.findIndex((exe: Exercise) => exe.id === exerciseId);
        const nextExercise = currentWorkout.exercises[currentExerciseIndex + 1];

        if (nextExercise) {
          router.push(`/program/${programId}/workout/${workoutId}/exercise/${nextExercise.id}`);
        } else {
          console.log("Workout complete!");
        }
      }
    } catch (error) {
      console.error("Error fetching workout or navigating to the next exercise:", error);
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-text">Get ready</div>
      </div>
    );
  }

  return (
    <div className="exercise-screen">
      <div className="header">
        <Link href={`../`}>
          <button className="backButton">&lt;</button>
        </Link>
      </div>
      <div className="videoContainer">
        {exercise?.video?.url ? (
          <video className="video" muted autoPlay loop>
            <source src={exercise.video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading video...</p>
        )}
        <div className="overlay">
          <div className="timer">{countdown}</div>
        </div>
      </div>
      <div className="progressContainer">
        <ProgressBar duration={exercise?.repetition || 0} />
        <div className="exercise">
          {exercise?.name}
        </div>
      </div>
      <div className="footer">
        <button className="seeAllButton">See all</button>
      </div>
    </div>
  );
}
