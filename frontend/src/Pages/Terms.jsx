import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Terms.css";
function Terms(){
    return(
      <>
      <Navbar/>
      <main className="terms-page">
        <section className="terms-hero">
            <h1>Terms & Coditions</h1>
            <p>Please read these terms before using AI Trip Planner.</p>
        </section>
        <section className="terms-content">
            <h2>1. use of service</h2>
            <p>AI Trip Planner provides travel planning assistance.</p>
            <h2>2.AI Recommendations</h2>
            <p>AI-generated Recommendations should be verified before making travel decisions.</p>
            <h2>3.User Responsibilities</h2>
            <p>Users are responsible for verifying travel information.</p>
        </section>
      </main>
      <Footer/>
      </>
    );
}
export default Terms;