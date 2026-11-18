import "./FeatureSection.css";
function FeatureSection(){
    return(
        <section className="featured-section">
            <div className="featured-header">
                <span>Featured Experiences</span>
                <h2>Discover Amazing Places</h2>
                <p>
                    Explore Handpicked destinations
                    and experiences for your 
                    next unforgottable journey.
                </p>

            </div>
            <div className="featured-container">
                <div div className="feature-card">
                    <div className="feature-icon">
                    <h3>
                        Beautiful Beaches
                    </h3>
                    <p>
                        Relax on beautiful
                        beaches and enjoy peaceful coastal
                        experiences.
                    </p>
                    <button onClick={() => navigate("/explore?category=beaches")}>Explore</button>

                 </div>
                </div>
                
                

                 <div className="feature-card">
                      <div className="feature-icon">
                        <h3>Mountain Adventure</h3>
                        <p>
                            Discover breathtaking
                            mountains and exciting Adventure
                            destination.
                        </p>
                        <button onClick={() => navigate("/explore?category=mountains")}>Explore</button>

                    </div>

                 </div>
                    
                  

                    <div className="feature-card">
                        <div className="featured-icon">
                            <h3>
                                Heritage & Culture
                            </h3>
                            
                            <p>
                                Experience history,
                                culture,traditions and remarkable
                                heritage places.
                            </p>
                            <button onClick={() => navigate("/explore?category=heritage")}>Explore</button>

                        </div>

                    </div>

                

                

            </div>

        </section>
    );
}
export default FeatureSection;