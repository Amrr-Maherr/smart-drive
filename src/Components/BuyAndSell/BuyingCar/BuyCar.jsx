import NavBar from "../../Nav/NavBar";
import ServicesText from "../../ServicesSection/ServicesText";
import Banner from "../Banner";
import ToggleButtons from "../ToggleButtons";
import CarCard from "../BuyingCar/CarCard";
import useFetchCars from "../../../Hooks/useFetchCars";
import { useEffect } from "react";
import Loader from "../../Loader/Loader";
import Filter from "./Filter";
import Image from "../../../assets/Untitled-1 1.png";
import Footer from "../../Footer/Footer";

export default function BuyCar() {
  const carsData = [
    {
      id: 1,
      brand: "أودى",
      model: "A4",
      year: 2020,
      mileage: 15000,
      price: 1200000,
      condition: "available",
      carType: "sedan",
      imageUrl: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      brand: "ب ام دبليو",
      model: "X5",
      year: 2019,
      mileage: 45000,
      price: 2500000,
      condition: "reserved",
      carType: "suv",
      imageUrl: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      brand: "شيرى",
      model: "Tiggo 7",
      year: 2021,
      mileage: 10000,
      price: 450000,
      condition: "sold",
      carType: "suv",
      imageUrl: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 4,
      brand: "شيفروليه",
      model: "Malibu",
      year: 2020,
      mileage: 30000,
      price: 550000,
      condition: "available",
      carType: "sedan",
      imageUrl: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 5,
      brand: "ستروين",
      model: "C4",
      year: 2021,
      mileage: 5000,
      price: 650000,
      condition: "available",
      carType: "hatchback",
      imageUrl: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 1,
      brand: "أودى",
      model: "A4",
      year: 2020,
      mileage: 15000,
      price: 1200000,
      condition: "available",
      carType: "sedan",
      imageUrl: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      brand: "ب ام دبليو",
      model: "X5",
      year: 2019,
      mileage: 45000,
      price: 2500000,
      condition: "reserved",
      carType: "suv",
      imageUrl: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      brand: "شيرى",
      model: "Tiggo 7",
      year: 2021,
      mileage: 10000,
      price: 450000,
      condition: "sold",
      carType: "suv",
      imageUrl: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 4,
      brand: "شيفروليه",
      model: "Malibu",
      year: 2020,
      mileage: 30000,
      price: 550000,
      condition: "available",
      carType: "sedan",
      imageUrl: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 5,
      brand: "ستروين",
      model: "C4",
      year: 2021,
      mileage: 5000,
      price: 650000,
      condition: "available",
      carType: "hatchback",
      imageUrl: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <>
      <NavBar/>
      <section>
        <Banner Image={Image} />
      </section>
      <div className="w-[95%] mx-auto">
        <div className="my-[54px] flex-col md:flex-row gap-10 flex items-center justify-between">
          <ToggleButtons />
          <ServicesText
            title="عربيات جديده ومستعمله للبيع"
            text="اشتري و قسط عربيتك من أكبر تشكيلة للعربيات المستعملة في مصر"
          />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 ">
          <div className="col-span-3  flex items-start px-3 justify-evenly flex-wrap">
            {carsData.map((car) => (
              <div key={car.id}>
                <CarCard carData={car} />
              </div>
            ))}
          </div>
          <div className="col-span-1">
            <Filter />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
