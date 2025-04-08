import NavBar from "../../Nav/NavBar";
import ServicesText from "../../ServicesSection/ServicesText";
import Banner from "../Banner";
import ToggleButtons from "../ToggleButtons";
import CarCard from "../BuyingCar/CarCard";
import useFetchCars from "../../../Hooks/useFetchCars";
import { useEffect } from "react";
import Loader from "../../Loader/Loader";
export default function BuyCar() {
  const { isLoading, data, error } = useFetchCars();

  useEffect(() => {
    console.log("isLoading:", isLoading);
    console.log("data:", data);
    console.log("error:", error);
  }, [])
  // if (isLoading) {
  //   return <>
  //   <Loader/>
  //   </>
  // }
  return (
    <>
      <NavBar />
      <section>
        <Banner />
      </section>
      <div className="w-[95%] mx-auto">
        <div className="my-[54px] flex-col md:flex-row gap-10 flex items-center justify-between">
          <ToggleButtons />
          <ServicesText
            title="عربيات جديده ومستعمله للبيع"
            text="اشتري و قسط عربيتك من أكبر تشكيلة للعربيات المستعملة في مصر"
          />
        </div>
        <div>
          <CarCard />
        </div>
      </div>
    </>
  );
}
