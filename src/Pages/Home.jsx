import CategoriesSection from "../Components/Categories/CategoriesSection";
import CoachEvaluationsSection from "../Components/CoachEvaluations/CoachEvaluationsSection";
import Footer from "../Components/Footer/Footer";
import HomeSlider from "../Components/Home/HomeSlider";
import NavBar from "../Components/Nav/NavBar";
import Services from "../Components/ServicesSection/Services";
import SubscriptionsSection from "../Components/Subscriptions/SubscriptionsSection";

export default function Home() {
    return (
        <>
        <NavBar/>
        <HomeSlider/>
        <Services/>
        <CategoriesSection />
        <CoachEvaluationsSection/>
        <SubscriptionsSection />
        <Footer/>
        </>
    )
}