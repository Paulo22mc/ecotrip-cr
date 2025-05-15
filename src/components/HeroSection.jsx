import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import image from '../assets/images/humedal.jpg';
import buseta from '../assets/images/busetaFrontal.jpeg';
import volcan from '../assets/images/hike.jpeg';
import puente from '../assets/images/puentesColgantes.jpeg';
import 'animate.css';

const HeroSection = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Efecto de opacidad y escala para el hero
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = 1 - Math.min(scrollPosition / 500, 0.7);
        const scale = 1 + Math.min(scrollPosition / 2000, 0.1);

        heroRef.current.style.opacity = opacity;
        heroRef.current.style.transform = `scale(${scale})`;
      }

      // Efecto de aparición para la sección About
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;

        if (isVisible) {
          aboutRef.current.classList.add('animate__fadeInUp');
          aboutRef.current.style.opacity = '1';
        }
      }

      // Efecto para las cards de tours (aparecen una por una)
      if (featuresRef.current) {
        const cards = featuresRef.current.querySelectorAll('.tour-card');
        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8;

          if (isVisible) {
            card.style.transitionDelay = `${index * 0.1}s`;
            card.classList.add('animate__fadeInRight');
            card.style.opacity = '1';
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section con efecto de desvanecimiento al hacer scroll */}
      <section
        ref={heroRef}
        className="hero-section text-white py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          minHeight: "500px",
          position: "relative",
          transition: 'opacity 0.5s ease, transform 1s ease',
          transformOrigin: 'center'
        }}
      >
        <Container className="text-center d-flex flex-column justify-content-center h-100 py-5">
          <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown">
            EcoTrip Costa Rica
          </h1>
          <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Discover Costa Rica with EcoTrip
          </p>
          <div className="d-flex justify-content-center gap-3 animate__animated animate__fadeInUp animate__delay-1s">
            <Button
              as={Link}
              to="/tours"
              variant="light"
              size="lg"
              className="px-4 hover-grow"
            >
              <i className="fas fa-route me-2"></i> See Tours
            </Button>
            <Button
              as={Link}
              to="/contact"
              variant="outline-light"
              size="lg"
              className="px-4 hover-grow"
            >
              <i className="fas fa-phone me-2"></i> Contact
            </Button>
          </div>
        </Container>

        {/* Flecha indicadora de scroll */}
        <div className="scroll-indicator animate__animated animate__bounce animate__infinite">
          <i className="fas fa-chevron-down"></i>
        </div>

        <style jsx>{`
          .hover-grow {
            transition: transform 0.3s ease;
          }
          .hover-grow:hover {
            transform: scale(1.05);
          }
          .scroll-indicator {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 2rem;
            color: white;
            opacity: 0.8;
            cursor: pointer;
            z-index: 10;
            animation-duration: 2s;
          }
        `}</style>
      </section>

      {/* About EcoTripo con efecto de aparición */}
      <section
        ref={aboutRef}
        className="py-5 animate__animated"
        style={{
          opacity: 0,
          transition: 'opacity 0.5s ease, transform 0.5s ease'
        }}
      >
        <Container>
          <div className="row align-items-center">
            <div className="col-lg-6 pt-4"> {/* Añadido pt-4 para padding-top */}
              <h2 className="mb-4 mt-3">Ride the Journey, Live the Experience</h2> {/* Añadido mt-3 */}
              <p className="lead mb-4"> {/* Añadido mb-4 */}
                At EcoTripo Costa Rica, we offer more than just private transfers — we deliver experiences.
              </p>
              <p className="mb-4"> {/* Añadido mb-4 */}
                Our mission is simple: to connect you with the beauty of Costa Rica through reliable,
                comfortable, and personalized transportation and tour services.
              </p>
              <p className="mb-4"> {/* Añadido mb-4 */}
                Whether you're arriving at the airport, chasing waterfalls, exploring volcanoes,
                or relaxing by the ocean, we'll get you there with ease, safety, and style.
              </p>
            </div>
            <div className="col-lg-6 pt-4"> {/* Añadido pt-4 para padding-top */}
              <div className="p-4 bg-light rounded" style={{ marginTop: '1rem' }}> {/* Añadido margin-top */}
                <h4 className="text-success mb-4">Why travel with EcoTripo?</h4> {/* Añadido mb-4 */}
                <ul className="list-unstyled mb-4">
                  <li className="mb-3">✔️ Clean, modern, and eco-conscious vehicles</li> {/* Aumentado mb-2 a mb-3 */}
                  <li className="mb-3">✔️ Friendly, bilingual local drivers</li>
                  <li className="mb-3">✔️ Personalized itineraries and flexible scheduling</li>
                  <li className="mb-3">✔️ Punctual, safe, and reliable service</li>
                </ul>
                <p className="mb-0">
                  Born and raised in Costa Rica, our team knows the best routes, the hidden gems,
                  and the real meaning of Pura Vida. We pride ourselves on offering not just rides,
                  but moments — tailored to your pace, your interests, and your sense of adventure.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Tours con efecto de aparición escalonado */}
      <section
        ref={featuresRef}
        className="py-5 bg-light"
      >
        <Container>
          <h2 className="text-center mb-5">Our Featured Tours</h2>
          <div className="row">
            {/* Ejemplo de card con efecto */}
            <div
              className="col-md-4 mb-4 tour-card animate__animated"
              style={{ opacity: 0, transition: 'opacity 0.5s ease, transform 0.5s ease' }}
            >
              <div className="card h-100">
                <div className="image-container" style={{ height: '250px', overflow: 'hidden' }}>
                  <img
                    src={buseta}
                    className="card-img-top w-100 h-100 object-fit-cover"
                    alt="Private Transfer"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Private Transfer</h5>
                  <p className="card-text flex-grow-1">Comfortable and reliable private transportation services throughout Costa Rica.</p>
                </div>
              </div>
            </div>

            <div
              className="col-md-4 mb-4 tour-card animate__animated"
              style={{ opacity: 0, transition: 'opacity 0.5s ease, transform 0.5s ease' }}
            >
              <div className="card h-100">
                <div className="image-container" style={{ height: '250px', overflow: 'hidden' }}>
                  <img
                    src={volcan}
                    className="card-img-top w-100 h-100 object-fit-cover"
                    alt="Arenal Volcano Hike"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Arenal Volcano Hike</h5>
                  <p className="card-text flex-grow-1">Experience the majestic Arenal Volcano with our expert guides.</p>
                </div>
              </div>
            </div>

            <div
              className="col-md-4 mb-4 tour-card animate__animated"
              style={{ opacity: 0, transition: 'opacity 0.5s ease, transform 0.5s ease' }}
            >
              <div className="card h-100">
                <div className="image-container" style={{ height: '250px', overflow: 'hidden' }}>
                  <img
                    src={puente}
                    className="card-img-top w-100 h-100 object-fit-cover"
                    alt="Hanging Bridge"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Hanging Bridge</h5>
                  <p className="card-text flex-grow-1">Walk through the rainforest canopy on our famous hanging bridges.</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <Button
                as={Link}
                to="/tours"
                variant="success"
                size="lg"
                className="rounded-pill px-4"
              >
                See tours <i className="fas fa-route ms-2"></i>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <style jsx global>{`
        /* Efecto smooth scroll para toda la página */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;