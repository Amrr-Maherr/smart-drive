import Image from "../assets/Rectangle 23835.png";
import Banner from "../Components/BuyAndSell/Banner";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Nav/NavBar";
import TrainersRow from "../Components/Trainers/TrainersRow";
export default function Trainers() {
  return (
    <>
      <NavBar />
      <Banner Image={Image} />
      <section>
        <TrainersRow />
      </section>
      <Footer/>
    </>
  );
}
