import React from "react"; // Import React
import CoachEvaluationsBox from "./CoachEvaluationsCard"; 
import ServicesText from "../ServicesSection/ServicesText"
import { Link } from "react-router-dom";
export default function CoachEvaluationsRow() {
  return (
    <>
      <div className="w-[90%]  mx-auto">
        <div className="flex items-center justify-between flex-row-reverse">
          <ServicesText
            title="تقييمات المدربين"
            text="اراء العملا فى كل مدربين القياده"
          />
          <Link to="/trainers">
            <button className="p-[12px] border-[#1E3A8A] border rounded-lg">
              اظهار الكل
            </button>
          </Link>
        </div>
        <div className="flex items-start justify-center lg:justify-between  flex-wrap gap-y-24 gap-x-4  pb-10">
          <CoachEvaluationsBox />
          <CoachEvaluationsBox />
          <CoachEvaluationsBox />
        </div>
      </div>
    </>
  );
}
