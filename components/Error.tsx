"use client";

import { GradesContext } from "@/utils/Grades";
import { use } from "react";

const Error = () => {
  const { error } = use(GradesContext);

  return (
    <h1 className="text-red-600">
      {error}
    </h1>
  );
};

export default Error;
