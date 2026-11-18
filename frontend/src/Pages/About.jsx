import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

function About(){
    return(
        <>
        <Navbar/>
        <main className="about-page">
            <section className="about-hero">
                <div className="about-content">
                    <span className="about-badge">
                      ABOUT AI TRIP PLANNER 
                    </span>
                    <h1>
                        Travel Smarter 
                        <br/>
                        Explore Better 
                    </h1>
                    <p>
                        AI Trip Planner helps travelers discover destinations,
                        create personalized itineraries,manage their budget,and make Better 
                        travel decisions with the help of AI.
                        
                    </p>
                </div>
            </section>
            <section className="about-section">
                <div className="about-container">
                <div className="about-text">
                     <span className="section-lable">
                       OUR MISSION 
                    </span>
                    <h2>
                       Making Travel Planning Simple 
                    </h2>
                    <p>
                        Planning a trip can take a lot of time 
                        Travelers often need to search for destinations,
                        acticities,transportation,accommodation,and budgets
                        separately.
                    </p>
                    <p>
                        AI Trip Planner brings these tasks together in often
                        platform and uses AI to help create personalized travel experiences.
                    </p>
                </div>
                <div className="about-highlight">
               <div className="highlight-box">
                <h3>AI Powered </h3>
                <p>
                    Intelligence tool with assist with travel planning.
                </p>

               </div>
               
               <div className="highlight-box">
                <h3>Personalized </h3>
                <p>
                    Everything you need for planning in one place.
                </p>
               </div>

                </div>
                </div>
            </section>
           <section className="about-features">
            <div className="about-container">
                <div className="feature-heading">
                    <span className="section-label">
                         WHAT WE OFFER
                    </span>
                    <h2>
                        Everything you Need for your journey
                    </h2>
                  
                </div>
                <div className="feature-grid">
                    <div className="feature-box">
                        <h3>
                            Trip planning
                        </h3>
                        <p>
                            Create personalized trips based on destination,
                            duration,budget,and travel preferences.
                        </p>
                    </div>
                    <div className="feature-box">
                        <h3>
                            Destination Discovery
                        </h3>
                        <p>
                            Explore destinations discover places 
                            that
                                    match your
                                     interests.
                        </p>
                    </div>
                     <div className="feature-box">
                        <h3>
                            AI Assistance
                        </h3>
                        <p>
                                          Get travel
                             suggestions and answers to your
                              travel                                       
                                        question with
                            an AI-powred Assistant.
                        </p>
                    </div>
                     <div className="feature-box">
                        <h3>
                            Smart Itineraries
                        </h3>
                        <p>
                            Organize your activities and destinations into 
                                        an 
                            easy-to-follow travel itinerary
                        </p>
                    </div>

                </div>
            </div>
           </section>
        </main>
        <Footer/>
        </>
    );
}
export default About;