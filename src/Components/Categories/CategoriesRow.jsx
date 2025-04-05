// CategoriesRow.js (Corrected)
import CategoriesBox from "./CategoriesBox";
import ImageOne from "../../assets/Rectangle 40.png"; // Ensure paths are correct
import ImageTwo from "../../assets/Rectangle 41.png"; // Ensure paths are correct

export default function CategoriesRow() {
  const CategoriesData = [
    {
      id: 1, // It's good practice to have unique IDs for keys
      title: "بيع السيارات",
      image: ImageOne,
      text: "نقدم لك مجموعة متنوعة من السيارات لتلبية احتياجاتك وتوفير أفضل العروض",
    },
    {
      id: 2, // It's good practice to have unique IDs for keys
      title: "تعلم القياده",
      image: ImageTwo,
      text: "فكل خطوة تقودك نحو تحسين مهاراتك وزيادة ثقتك  على الطريق",
    },
  ];
  return (
    <>
      <div className="container w-[90%] mx-auto flex items-center justify-between flex-wrap py-8">
        {CategoriesData.map(
          (
            categoryItem
          ) => (
            <CategoriesBox key={categoryItem.id} ele={categoryItem} />
          )
        )}
      </div>
    </>
  );
}
