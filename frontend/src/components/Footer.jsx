import "./Footer.css";
function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                     <h2> AI Trip Planner</h2>
                     <p>
                        Plan smarter,travel better,and discover unforgettable journeys
                        with AI.
                     </p>
                     </div>

                     <div className="footer-links">
                        <h3>Explore</h3>

                        <a href="/"><i className="fa fa-home"></i>Home</a>

                        <a href="/planner"><i className="fa fa-compass"></i>Plan a Trip</a>

                        <a href="/explore"><i className="fa fa-globe"></i>Explore</a>

                        <a href="/my-trips"><i className="fa fa-suitcase"></i>My-Trips</a>

                     </div>

                     <div className="footer-links">

                        <h3>AI Services</h3>

                        <a href="/ai-assistant"><i className="fa fa-android"></i>Ai-Assistant</a>

                        <a href="/planner"><i className="fa fa-compass"></i>Smart Planner</a>

                        <a href="/explore"><i className="fa fa-globe"></i>Destination Guide</a>

                        <a href="/dashboard"><i className="fa fa-line-chart"></i>Dashboard</a>

                     </div>

                     <div className="footer-links">
                        <h3>Company</h3>

                        <a href="/about"><i className="fa fa-info-circle"></i>About</a>

                        <a href="contact"><i className=" fa fa-phone"></i>Contact</a>

                        <a href="privacy"><i className="fa fa-lock"></i>Privacy</a>

                        <a href="/terms"><i className="fa fa-file-text-o"></i>Terms</a>

                     </div>


            </div>


            <div className="footer-bottom">
                <p>
                    2026 AI Trip Planner All Right Reserved.
                </p>
                <p>
                    Made with love for travelers
                </p>

            </div>

        </footer>
    );
}
export default Footer;