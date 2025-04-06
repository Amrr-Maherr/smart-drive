import React from "react"; // Import React
import CoachEvaluationsBox from "./CoachEvaluationsCard"; 

export default function CoachEvaluationsRow() {
  return (
    <>
      <div className="flex items-start justify-center lg:justify-between w-[95%]  mx-auto flex-wrap gap-y-24 gap-x-4 pt-20 pb-10">
          <CoachEvaluationsBox  />
          <CoachEvaluationsBox  />
          <CoachEvaluationsBox  />
      </div>
    </>
  );
}
