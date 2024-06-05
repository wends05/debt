"use client";

import { GradesContext } from "@/utils/Grades";
import React, { use, useEffect } from "react";
import GradeCard from "./GradeCard";

const GradesList = () => {
  const { grades } = use(GradesContext);

  
  return (
    <main>
      <h1>Grades List</h1>
      <section className="grid-flow-row grid-cols-3 grid gap-2">
        {grades.map(({name, courseCode, gradeValue, units}) => {
          return <GradeCard  
          name={name}
          courseCode={courseCode}
          gradeValue={gradeValue}
          units={units}
          key={courseCode}
          />;
        })}
      </section>
    </main>
  );
};

export default GradesList;
