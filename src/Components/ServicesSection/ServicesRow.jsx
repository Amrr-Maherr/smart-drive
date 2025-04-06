import ImageOne from "../../assets/GroupOne.svg"
import ImageTwo from "../../assets/GroupTwo.svg";
import ImageThree from "../../assets/GroupThree.svg";
import ImageFour from "../../assets/GroupFour.png";
import ServicesBox from "./ServicesBox";
export default function ServicesRow() {
  const ServicesData = [
    { image: ImageFour, title: "بيع اللوحات", link: "" },
    { image: ImageThree, title: "بيع سيارات", link: "" },
    { image: ImageTwo, title: "اسئله ذكيه", link: "" },
    { image: ImageOne, title: "المدربين", link: "" },
  ];
    return (
      <>
        <div className="flex items-center justify-between flex-col md:flex-row flex-wrap">
          {ServicesData.map((item, index) => (
            <>
              <ServicesBox key={index} Data={item} />
            </>
          ))}
        </div>
      </>
    );
}