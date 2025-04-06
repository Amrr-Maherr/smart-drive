import React from "react"; // Import React
import CoachEvaluationsBox from "./CoachEvaluationsCard"; // Ensure path is correct
import Avatar1 from "../../assets/avatar.png";

const evaluationsData = [
  {
    id: 1,
    avatar: Avatar1,
    reviewText:
      "مدرب رائع ومحترف، ساعدني كثيراً في تحقيق أهدافي. أنصح به بشدة!",
    rating: 5,
    name: "أحمد علي",
    title: "مدرب لياقة بدنية",
  },
  {
    id: 2,
    avatar: Avatar2 || Avatar1, // Fallback avatar if Avatar2 doesn't exist
    reviewText: "تجربة ممتازة وتعامل راقي. شرح واضح ومتابعة مستمرة.",
    rating: 4,
    name: "فاطمة الزهراء",
    title: "مستشارة تغذية",
  },
  {
    id: 3,
    avatar: Avatar3 || Avatar1, // Fallback avatar if Avatar3 doesn't exist
    reviewText:
      "كانت الجلسات مفيدة جداً، لكن أتمنى لو كان هناك المزيد من التمارين العملية.",
    rating: 3,
    name: "خالد محمود",
    title: "مدرب تطوير ذاتي",
  },
  // Add more evaluation objects as needed
];
// --- نهاية بيانات المثال ---

export default function CoachEvaluationsRow() {
  return (
    <>
      {/* Adjust container width and centering as needed */}
      <div className="flex items-start justify-center lg:justify-between w-[95%]  mx-auto flex-wrap gap-y-24 gap-x-4 pt-20 pb-10">
        {evaluationsData.map((evaluation) => (
          <CoachEvaluationsBox key={evaluation.id} evaluation={evaluation} />
        ))}
      </div>
    </>
  );
}
