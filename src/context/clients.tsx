"use client";
import { createContext, useContext, useState } from 'react';

type UserContextType = {
  programsStarted: string[];
  workoutsDone: string[];
  addProgramId: (id: string) => void;
  addWorkoutId: (id: string) => void;
};

const UserContext = createContext<UserContextType>({
  programsStarted: [],
  workoutsDone: [],
  addProgramId: () => {},
  addWorkoutId: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [programsStarted, setProgramsStarted] = useState<string[]>([]);
  const [workoutsDone, setWorkoutsDone] = useState<string[]>([]);

  const addProgramId = (id: string) => {
    setProgramsStarted((prevPrograms) => [...prevPrograms, id]);
  };

  const addWorkoutId = (id: string) => {
    setWorkoutsDone((prevWorkouts) => [...prevWorkouts, id]);
  };

  return (
    <UserContext.Provider value={{ programsStarted, workoutsDone, addProgramId, addWorkoutId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
