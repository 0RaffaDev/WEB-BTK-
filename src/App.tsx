import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Artists } from "./pages/Artists.tsx";
import { Home } from "./pages/Home.tsx";
import { Releases } from "./pages/Releases.tsx";
import { Contact } from "./pages/Contact.tsx";
import { Events } from "./pages/Events.tsx";
import "./styles/globals.css";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
