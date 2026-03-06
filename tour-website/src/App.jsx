import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import StatsNewsletterFooter from "./components/StatsNewsletterFooter";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import About from "./pages/About";
import Tours from "./pages/Tours";
import VisaService from "./pages/VisaService";
import AirTickets from "./pages/AirTickets";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <div className="w-full">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/country/:slug" element={<DestinationDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/visa-service" element={<VisaService />} />
          <Route path="/air-tickets" element={<AirTickets />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
