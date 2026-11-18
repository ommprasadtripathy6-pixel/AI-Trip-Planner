import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Privacy.css";
function Privacy(){
    return(
        <>
        <Navbar/>
        <main className="privacy-page">
         <section className="privacy-hero">
          <h1>Privacy Policy</h1>
          <p>Your Privacy matters to us. </p>
         </section>
         <section className="privacy-content">
          <h2>1.Information we collect</h2>
          <p>we may collect Information required to provide travel planning services.</p>
          <h2>2.How we use information</h2>
          <p>Information may be used to improve your trip planning experience.</p>
          <h2>3.Data security</h2>
          <p>we take resonable step to protect user information.</p>
          
         </section>
        </main>
        <Footer/>

        </>
    );
}
export default Privacy;