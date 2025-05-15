import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext'; // Importa el Provider
import TourismNavbar from './components/TourismNavbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Tours from './components/ToursSection';
import Transport from './components/TransportSection';
import About from './components/AboutSection';
import Contact from './components/ContactSection';

function App() {
  return (
    <LanguageProvider> {/* Envuelve toda tu aplicación con el Provider */}
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <TourismNavbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;