"use client";
import { Grade, GradesContext } from "@/utils/Grades";
import React, { FormEvent, use, useEffect, useState } from "react";

const AddGrade = () => {
  const { grades, setGrades, setError } = use(GradesContext);

  const [name, setName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [value, setValue] = useState<Number>(0);
  const [units, setUnits] = useState<Number>(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const hasCourseCode = grades.some(
      (grade) => grade.courseCode.toLowerCase() == courseCode.toLowerCase()
    );

    if (hasCourseCode) {
      setError("You already have an existing course code.");
      return;
    }

    if (!name || !courseCode) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");

    const newGrade: Grade = {
      name: name,
      courseCode: courseCode,
      gradeValue: value,
      units: units,
    };
    setGrades((currentGrades) => {
      const updatedGrades = [...currentGrades, newGrade];

      localStorage.setItem("grades", JSON.stringify(updatedGrades));
      return updatedGrades;
    });
    setName("");
    setCourseCode("");
    setValue(0);
    setUnits(0);
  };

  return (
    <div className="bg-zinc-500 p-5 flex justify-center rounded-md ">
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Course Code"
          onChange={(e) => setCourseCode(e.target.value)}
          value={courseCode}
        />
        <input
          type="number"
          placeholder="Value"
          onChange={(e) => setValue(Number(e.target.value))}
          value={String(value)}
        />
        <input
          type="number"
          placeholder="Units"
          onChange={(e) => setUnits(Number(e.target.value))}
          value={String(units)}
        />

        <input type="submit" value="Add a Grade" className="bg-slate-200 " />
      </form>
    </div>
  );
};

export default AddGrade;
