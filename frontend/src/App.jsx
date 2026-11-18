
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Planner from "./Pages/Planner";
import Explore from "./Pages/Explore";
import MyTrips from "./Pages/MyTrips";
import AIAssistant from "./Pages/AIAssistant";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

