import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MyTrips.css";
function MyTrips(){
    return(
        <>
        <Navbar/>
        <main className="mytrips-page">
            <section className="mytrips-hero">
               <div className="mytrips-content">
                <span className="mytrips-badge">
                    MY TRIPS

                </span>

                <h1>
                    Your Travel 
                    <br/>
                    Adventures
                </h1>
               <p>
                View and manage your planned trips,itinersries,
                destinations,and travel memories in one place.
               </p>

               <div className="mytrips-actions">
                <button className="primary-trip-btn">
                    plan new trip

                </button>
              
              <button className="secondary-trip-btn">
                Explore destinations

              </button>
                 
               </div>


               </div>
            </section>

            <section className="trips-list-section">
                
                <div className="trips-list-container">
                    <h2>
                        Your Saved Trips
                    </h2>
                    <div className="empty-trip-box">

                        <h3>
                            No trips yet
                        </h3>
                          <p>
                        start planning your first journey
                        and it will appear here.
                    </p>
                    
                    <button className="primary-trip-btn">
                        Create Your First Trip

                    </button>


                    </div>
                  

                </div>

            </section>

        </main>
        <Footer/>
        </>
    );
}
export default MyTrips;