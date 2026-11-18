import "./Navbar.css";
function Navbar(){
    return(
        <nav className="navbar">
          <div className="logo">
             Ai Trip Planner

          </div>

          <div className="nav-links">
            <a href="/"><i className="fa fa-home"></i>Home</a>
            <a href="/planner"><i className="fa fa-plane"></i>Plan a trip</a>
            <a href="/explore"><i className="fa fa-globe"></i>Explore</a>
            <a href="/my-trips"><i className="fa fa-suitcase"></i>My Trips</a>
            <a href="/ai-assistant"><i className="fa fa-comments"></i>AI Assistant</a>
            <a href="/about"><i className="fa fa-info-circle"></i>About</a>
          

          </div>
          <button className="nav-button">
           Get Started
          </button>
        </nav>
    );
}
export default Navbar;