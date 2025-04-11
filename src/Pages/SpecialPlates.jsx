import NavBar from "../Components/Nav/NavBar";
import SpecialPlatesForm from "../Components/SpecialPlates/SpecialPlatesForm";
import Footer from "../Components/Footer/Footer"
export default function SpecialPlates() {
    return (
        <>
        <NavBar color="text-black"/>
        <section>
            <SpecialPlatesForm/>
        </section>
        <Footer/>
        </>
    )
}