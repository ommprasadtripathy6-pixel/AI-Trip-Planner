
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DestinationSection from "../components/DestinationSection";
import TripSection from "../components/TripSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <main>
        <Hero/>
        <DestinationSection/>
        <TripSection/>
        <FeatureSection/>

        </main>
        
        <Footer/>
        
        </>
    );
}
export default Home;