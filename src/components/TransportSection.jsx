import { Container, Button, Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import monoImage from '../assets/images/mono.jpg';
import { useEffect, useRef } from 'react';

const TransportSection = () => {
  const tableRef = useRef(null);
  
  // Efecto para detectar scroll en móviles
  useEffect(() => {
    const tableContainer = tableRef.current;
    if (tableContainer) {
      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = tableContainer;
        const scrollPosition = scrollTop + clientHeight;
        
        // Mostrar/ocultar indicadores según posición de scroll
        if (scrollPosition >= scrollHeight - 5) {
          tableContainer.parentElement.querySelector('.scroll-bottom-hint').classList.add('d-none');
        } else {
          tableContainer.parentElement.querySelector('.scroll-bottom-hint').classList.remove('d-none');
        }
        
        if (scrollTop === 0) {
          tableContainer.parentElement.querySelector('.scroll-top-hint').classList.remove('d-none');
        } else {
          tableContainer.parentElement.querySelector('.scroll-top-hint').classList.add('d-none');
        }
      };
      
      tableContainer.addEventListener('scroll', handleScroll);
      return () => tableContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Datos de las rutas privadas
  const privateRoutes = [
    {
      id: 1,
      name: "San José Airport → La Fortuna (Arenal)",
      duration: "3 hours",
      price: "$180"
    },
    {
      id: 2,
      name: "San José Airport → Manuel Antonio",
      duration: "2.5 hours",
      price: "$160"
    },
    {
      id: 3,
      name: "Liberia Airport → Tamarindo",
      duration: "1.5 hours",
      price: "$120"
    },
    {
      id: 4,
      name: "Liberia Airport → La Fortuna",
      duration: "3 hours",
      price: "$180"
    },
    {
      id: 5,
      name: "San José Airport → Monteverde",
      duration: "3.5 hours",
      price: "$170"
    },
    {
      id: 6,
      name: "San José Airport → Nosara",
      duration: "4.5 hours",
      price: "$220"
    },
    {
      id: 7,
      name: "Liberia Airport → La Fortuna (Arenal)",
      duration: "3 hours",
      price: "$180"
    },
    {
      id: 8,
      name: "La Fortuna (Arenal) → Liberia Airport",
      duration: "3 hours",
      price: "$180"
    },
    {
      id: 9,
      name: "La Fortuna (Arenal) → Manuel Antonio",
      duration: "5 hours",
      price: "$250"
    },
    {
      id: 10,
      name: "La Fortuna (Arenal) → San José Airport",
      duration: "3 hours",
      price: "$180"
    }
  ];

  // Features comunes
  const commonFeatures = [
    "Direct private transportation",
    "Professional bilingual drivers",
    "Comfortable vehicles with A/C",
    "Bottled water included",
    "Free WiFi in most vehicles",
    "24/7 customer support"
  ];

  return (
    <section 
      id="transport" 
      className="py-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${monoImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        minHeight: '100vh'
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white">Exclusive Private Transportation</h2>
          <p className="lead text-white-50">Comfortable and direct transfers throughout Costa Rica</p>
        </div>

        {/* Sección de Features */}
        <Row className="mb-4 justify-content-center">
          <Col lg={8}>
            <div className="bg-white p-4 rounded-3 mb-4 shadow">
              <h3 className="text-center fw-bold mb-3 text-success">Our Service Includes</h3>
              <Row>
                {commonFeatures.map((feature, index) => (
                  <Col key={index} sm={6} className="mb-2">
                    <div className="d-flex align-items-center text-dark">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      <span>{feature}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* Tabla de rutas con mejoras para móvil */}
        <div className="mb-5 position-relative">
          <div className="bg-white rounded-3 p-4 shadow">
            <h3 className="fw-bold mb-4 text-center text-dark">Popular Routes</h3>
            
            {/* Indicador superior de scroll (solo móvil) */}
            <div className="scroll-top-hint d-block d-md-none text-center mb-2 animate-bounce">
              <i className="fas fa-arrow-down text-success me-2"></i>
              <span className="text-muted small">Scroll down for more routes</span>
            </div>
            
            {/* Contenedor de tabla con scroll */}
            <div 
              ref={tableRef}
              style={{ 
                maxHeight: '500px', 
                overflowY: 'auto',
                scrollbarWidth: 'thin'
              }}
              className="mobile-scroll-container"
            >
              <Table bordered hover className="mb-0">
                <thead style={{ 
                  position: 'sticky', 
                  top: 0, 
                  backgroundColor: 'white', 
                  zIndex: 1 
                }}>
                  <tr>
                    <th className="fw-bold text-dark">Route</th>
                    <th className="text-center fw-bold text-dark">Duration</th>
                    <th className="text-center fw-bold text-dark">Price</th>
                    <th className="text-center fw-bold text-dark">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {privateRoutes.map((route) => (
                    <tr key={route.id}>
                      <td className="fw-bold text-dark">
                        <span className="d-block d-md-none text-success mb-1">Route:</span>
                        {route.name}
                      </td>
                      <td className="text-center text-dark">
                        <span className="d-block d-md-none text-success mb-1">Duration:</span>
                        {route.duration}
                      </td>
                      <td className="text-center text-success fw-bold">
                        <span className="d-block d-md-none text-success mb-1">Price:</span>
                        {route.price}
                      </td>
                      <td className="text-center">
                        <Button
                          variant="success"
                          size="sm"
                          className="px-3"
                          as={Link}
                          to={`/contact?message=${encodeURIComponent(
                            `Hi! I'm interested in the route: ${route.name} for ${route.price}.`
                          )}`}
                        >
                          <i className="fas fa-calendar-alt me-1"></i>
                          <span className="d-none d-md-inline">Book</span>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            
            {/* Indicador inferior de scroll (solo móvil) */}
            <div className="scroll-bottom-hint d-block d-md-none text-center mt-2">
              <i className="fas fa-arrow-up text-success me-2"></i>
              <span className="text-muted small">Scroll up to see all options</span>
            </div>
          </div>
        </div>

        {/* Llamado a la acción */}
        <div className="text-center bg-success bg-opacity-90 p-4 rounded-3 text-white shadow-lg">
          <h3 className="fw-bold mb-3">Do you need a custom route?</h3>
          <p className="fs-5 mb-4">We design a service tailored to your needs and schedule.</p>
          <Button
            variant="light"
            size="lg"
            className="rounded-pill px-4 fw-bold"
            as={Link}
            to="/contact"
          >
            <i className="fas fa-paper-plane me-2"></i>Request a quote
          </Button>
        </div>
      </Container>
      
      {/* Estilos personalizados */}
      <style jsx>{`
        .mobile-scroll-container {
          -webkit-overflow-scrolling: touch;
        }
        .mobile-scroll-container::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .mobile-scroll-container::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.2);
          border-radius: 3px;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-3px); }
        }
        @media (max-width: 768px) {
          .table td, .table th {
            padding: 0.75rem 0.5rem;
            font-size: 0.9rem;
          }
          .table-responsive {
            border: none;
          }
          .scroll-top-hint, .scroll-bottom-hint {
            transition: opacity 0.3s ease;
          }
        }
      `}</style>
    </section>
  );
};

export default TransportSection;