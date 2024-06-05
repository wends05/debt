"use client";

import { GradesContext } from "@/utils/Grades";
import { use, useEffect, useState } from "react";

const GWA = () => {
  const { grades } = use(GradesContext);

  const [average, setAverage] = useState(0);
  const [units, setUnits] = useState<Number>(0);

  useEffect(() => {
    let total = 0;
    let totalUnits = 0;
    for (const grade of grades) {
      total += grade.gradeValue.valueOf() * grade.units.valueOf();
      totalUnits += grade.units.valueOf()
    }
    setAverage(total / totalUnits);
    setUnits(totalUnits)
  }, [grades]);
  return (
    <div className="flex items-center justify-around bg-zinc-400 px-2 rounded-2xl">
      <h1>GWA: {grades ? Number(average).toFixed(2) : 0}</h1>
      <h1>Total Subjects: {grades.length}</h1>
      <h1>Total Units: {Number(units)}</h1>
    </div>
  );
};

export default GWA;
