import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";
function Contact() {
    return(
       <>
       
       <main className="contact-page">
        <section className="contact-hero">
            <h1> Contact Us</h1>
             <p>Have questions about AI Trip Planner? we'd love to hear from you.</p>
        </section>
        <section className="contact-content">
            <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>Email:support@aitripplanner.com</p>
                <p>phone:+91 XXXXX XXXXX</p>
                <p>Location:Bhubneswar,odisha</p>
            </div>
            <form className="contact-form">
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Your Mail"/>
                <textarea placeholder="Your Message"/>
                <button type="submit">Send Message</button>
            </form>
        </section>
       </main>
       <Footer/>
       </>
    );
}
export default Contact;