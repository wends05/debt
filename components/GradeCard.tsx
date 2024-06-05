import { Grade, GradesContext } from "@/utils/Grades";
import React, { use, useState } from "react";

const GradeCard = ({ name, courseCode, gradeValue, units }: Grade) => {
  const { grades, setGrades } = use(GradesContext);
  const [editing, setEditing] = useState(false);

  const [newGrade, setNewGrade] = useState(gradeValue);
  const [newUnits, setNewUnits] = useState(units);

  const deleteGrade = () => {
    setGrades(() => {
      const updatedGrades = grades.filter(
        (grade) => grade.courseCode !== courseCode
      );

      localStorage.setItem("grades", JSON.stringify(grades));
      return updatedGrades;
    });

    localStorage.setItem("grades", JSON.stringify(grades));
  };

  const updateGrade = () => {
    setGrades((currentGrades) => {
      const currentGrade = currentGrades.find(
        (grade) => grade.courseCode === courseCode
      );
      currentGrade!.gradeValue = newGrade;
      currentGrade!.units = newUnits;
      localStorage.setItem("grades", JSON.stringify(grades));
      
      
      return currentGrades;
    });
    setEditing(false);
    setGrades(JSON.parse(localStorage.getItem('grades')!))
  };

  const onCancel = () => {
    setEditing(false);
    setNewGrade(gradeValue);
    setNewUnits(units);
  };

  return (
    <main className="flex bg-zinc-400 flex-col p-2 rounded-lg justify-between">
      {!editing ? (
        <>
          <h1 className="text-base">
            {name} - {courseCode}
          </h1>
          <h3 className="text-sm">
            Grade: {String(gradeValue.toFixed(2))} ({String(units)} units)
          </h3>
          <div className="flex flex-col gap-1">
            <button onClick={() => setEditing(true)}>Edit Grade</button>
            <button onClick={deleteGrade}>Delete Grade</button>
          </div>
        </>
      ) : (
        <>
          <form>
            <input
              type="number"
              className="w-full"
              value={Number(newGrade)}
              onChange={(e) => setNewGrade(Number(e.target.value))}
            />
            <input
              type="number"
              className="w-full"
              value={Number(newUnits)}
              onChange={(e) => setNewUnits(Number(e.target.value))}
            />
          </form>
          <div className="flex gap-1 flex-col py-1 px-2">
            <button onClick={updateGrade}>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
          </div>
        </>
      )}
    </main>
  );
};

export default GradeCard;
