"use client";

import React, {
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface IGradesContext {
  grades: Grade[];
  setGrades: React.Dispatch<SetStateAction<Grade[]>>;
  error: string;
  setError: React.Dispatch<SetStateAction<string>>;
}

export const GradesContext = createContext<IGradesContext>({
  grades: [],
  setGrades: () => {},
  error: "",
  setError: () => {},
});

export type Grade = {
  name: string;
  courseCode: string;
  gradeValue: Number;
  units: Number;
};

const Grades = ({ children }: { children: React.ReactNode }) => {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [error, setError] = useState("");
  const value = {
    grades,
    setGrades,
    error,
    setError,
  };
  useEffect(() => {
    const stringGrades = localStorage.getItem('grades')
    setGrades(JSON.parse(stringGrades || "[]"))
  }, [])

  return (
    <GradesContext.Provider value={value}>{children}</GradesContext.Provider>
  );
};

export default Grades;
