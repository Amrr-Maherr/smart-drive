import NavBar from "../../Nav/NavBar";
import ServicesText from "../../ServicesSection/ServicesText";
import Banner from "../Banner";
import ToggleButtons from "../ToggleButtons";
import SellForm from "./SellForm";
import Image from "../../../assets/Untitled-1 1.png";
import Footer from "../../Footer/Footer";
export default function SellCar() {
  return (
    <>
      <NavBar />
      <section>
        <Banner Image={Image} />
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
      <Footer/>
    </>
  );
}
