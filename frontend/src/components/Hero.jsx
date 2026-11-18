import "./Hero.css";
import {useNavigate} from "react-router-dom";


function Hero() {
    const navigate = useNavigate();
    return (
        <section className="hero">

            <div className="hero-content">

                <p className="hero-tagline">
                    YOUR AI POWERED TRAVEL COMPANION
                </p>

                <h1>
                    Plan Your Perfect
                    <span>journey with AI</span>
                </h1>

                <p className="hero-description">
                    Discover Destinations, create personalized itineraries,
                    manage your budget, travel smarter with AI.
                </p>

                <div className="hero-buttons">

                    <button className="primary-btn"
                    onClick={() => navigate("/planner")}
                    >
                        Plan My Trip
                    </button>

                    <button className="secondary-btn" 
                    onClick={()=> navigate("/explore")} 
                    >
                        Explore Destination
                    </button>

                </div>

            </div>

            

        </section>
    );
}

export default Hero;