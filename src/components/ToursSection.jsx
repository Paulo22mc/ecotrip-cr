import { useState } from 'react';
import { Card, Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import arenalImage from '../assets/images/volcanPoas.jpg';
import tortugueroImage from '../assets/images/volcan.jpg';
import monteverdeImage from '../assets/images/monteverde.jpg';

const ToursSection = ({ limit }) => {
  const [tours] = useState([
    { 
      id: 1, 
      title: "Arenal Volcano", 
      description: "Explora el imponente volcán y relájate en sus famosas aguas termales naturales.",
      image: arenalImage,
      duration: "Día completo",
      price: "$XX",
      difficulty: "Moderado",
      highlights: ["Vistas al volcán", "Senderismo"]
    },
    { 
      id: 2, 
      title: "Poas Volcano", 
      description: "Navega por los canales de este paraíso natural y observa tortugas en su hábitat.",
      image: tortugueroImage,
      duration: "2 días/1 noche",
      price: "$XX",
      difficulty: "Fácil",
      highlights: ["Vistas al volcán", "Senderismo"]
    },
    { 
      id: 3, 
      title: "Monteverde", 
      description: "Experimenta la magia del bosque nuboso con puentes colgantes y tirolesas.",
      image: monteverdeImage,
      duration: "Día completo",
      price: "$XX",
      difficulty: "Moderado",
      highlights: ["Puentes colgantes", "Tirolesa", "Flora y fauna única"]
    }
  ].slice(0, limit || 3));

  return (
    <section id="tours" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Descubre Nuestros Tours</h2>
          <p className="lead text-muted">Experiencias inolvidables en los destinos más impresionantes de Costa Rica</p>
        </div>
        
        <Row className="g-4">
          {tours.map(tour => (
            <Col key={tour.id} lg={4} md={6}>
              <Card className="h-100 shadow-sm border-0 overflow-hidden">
                <div className="ratio ratio-16x9">
                  <Card.Img 
                    variant="top" 
                    src={tour.image} 
                    alt={tour.title}
                    className="object-fit-cover"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="mb-3">
                    <Card.Title className="fw-bold">{tour.title}</Card.Title>
                    <Card.Text>{tour.description}</Card.Text>
                    
                    <div className="d-flex justify-content-between mb-2">
                      <small className="text-muted">
                        <i className="fas fa-clock me-1"></i> {tour.duration}
                      </small>
                      <Badge bg="success" className="text-white">
                        <i className="fas fa-bolt me-1"></i> {tour.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="mb-3">
                      {tour.highlights.map((item, index) => (
                        <Badge key={index} bg="light" text="dark" className="me-1 mb-1">
                          <i className="fas fa-check-circle text-success me-1"></i>{item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 text-success fw-bold">{tour.price}</h5>
                    <Button 
                      as={Link} 
                      to={`/tours/${tour.id}`} 
                      variant="outline-success" 
                      className="rounded-pill px-4"
                    >
                      Reservar <i className="fas fa-arrow-right ms-2"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ToursSection;