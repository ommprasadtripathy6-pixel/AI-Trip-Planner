import {useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Planner.css";
function Planner() {
  const [destination,setDestination]= useState("");
   const [duration,setDuration]= useState("");
    const [budget,setBudget]= useState("");
     const [travelType,setTravelType]= useState("");
      const [trip,setTrip]= useState(null);
       const [loading,setLoading]= useState(false);

       const generateTrip = async() => {
        setLoading(true);
        try{
          const response = await
          fetch("http://localhost:5000/api/plan-trip",{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({
              destination,duration,budget,travelType,
            }),
          });
 
          const data = await response.json();
          if(!response.ok) {
            throw new
            Error(data.message|| "Failed to generate trip");
          }
          setTrip(data);
        }catch (error){
          console.error("Error:",error);
          alert("Could not connect to backend.");
        }finally{
          setLoading(false);
        }
       };
    return(
        <>
        <Navbar/>

        <main className="planner-page">

            <section className="planner-hero">

                <div className="planner-content">

                    <span className="planner-badge">
                        AI TRIP PLANNER
                      </span>

                      <h1>
                        Plan Your Perfect 
                        <br/>
                        Journey With AI
                      </h1>

                      <p>
                        Create a personalized travel plan
                        based on your destination,budget,duration,
                        and travel preferences.
                      </p>

                      <div className="planner-form">

                        <div className="form-group">
                            <label>Destination</label>
                             <input type="text" placeholder="Where do you want to go"
                             value={destination}
                             onChange={(e)=>setDestination(e.target.value)} 
                            /></div>

                      <div className="form-row">

                           <div className="form-group">
                            <label>Duration</label>
                            <input type="Number" placeholder="Days"
                            value={duration}
                            onChange={(e)=>setDuration(e.target.value)}/></div>

                         <div className="form-group">
                            <label>Budget</label>
                            <input type="Number" placeholder="Budget"
                            value={budget}
                            onChange={(e)=>setBudget(e.target.value)}/></div>

                      </div>

                      <div className="form-group">
                        <label>Travel Type</label>
                        <select value={travelType} onChange={(e)=>setTravelType(e.target.value)}>
                            <option>Select travel type</option>
                            <option>Solo</option>
                            <option>Couple</option>
                            <option>Family</option>
                            <option>Friends</option>
                        </select>

                      </div>
                       <button className="generate-btn" onClick={generateTrip} disable={loading}>
                        {loading ? "Generating...":"Generate My Trip"}
                         </button>

                         {trip && (
                          <div className="trip-result">
                           <h2>Your AI Trip plan</h2>
                           <pre>
                            {JSON.stringify(trip,null,2)}
                           </pre>
                          </div>
                         )}

                      </div>

                </div>

            </section>

        </main>
        <Footer/>
        </>
    );
}
export default Planner;