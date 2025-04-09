import NavBar from "../../Nav/NavBar";
import ServicesText from "../../ServicesSection/ServicesText";
import Banner from "../Banner";
import ToggleButtons from "../ToggleButtons";
import SellForm from "./SellForm";

export default function SellCar() {
  return (
    <>
      <NavBar />
      <section>
        <Banner />
      </section>
      <div className="w-[95%] mx-auto">
        <div className="mt-[54px] flex-col md:flex-row gap-10 flex items-center justify-between">
          <ToggleButtons />
          <ServicesText
            title="بيع سيارتك بسهولة"
            text="مجاناً و فقط في أقل من دقيقة إختر معلومات سيارتك"
          />
        </div>
        <div>
          <SellForm/>
        </div>
      </div>
    </>
  );
}
