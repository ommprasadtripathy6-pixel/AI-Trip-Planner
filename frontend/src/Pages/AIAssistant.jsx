import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AIAssistant.css";
function AIAssistant(){
    return(
        <>
        <Navbar/>
        <main className="ai-assistant-page">
            <section className="ai-assistant-hero">
                <div className="ai-assistant-content">
                    <span className="ai-assistant-badge">
                        AI TRAVEL ASSISTANT
                    </span>
                    <h1>
                       Your personal
                       <br/>
                       AI travel assistant
                    </h1>
                    <p>
                        Ask questions,discover destinations,get travel ideas,
                        and create smarter travel plans with AI.
                    </p>
                    <div className="ai-chat-box">
                     <div className="ai-massage">
                        <div className="ai-icon">
                          AI
                        </div>
                            <div className="massage-content">
                             <strong> AI Assistant</strong>
                             <p>
                                Hello! How can i help you plan your journey
                             </p>
                            </div>
                        
                     </div>
                     <div>
                      <input type="text" placeholder="Ask me anything about your trip..."
                      />
                      <button>send</button>
                     </div>
                    </div>
                    <div className="ai-suggestions">
                     <button>
                        suggest destinations
                     </button>
                     <button>
                        plan within my budget
                     </button>
                     <button>
                        find place to stay
                     </button>
                     <button>
                        create an itinerary
                     </button>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    );
}
export default AIAssistant;