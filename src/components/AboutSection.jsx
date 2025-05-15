import { Container, Row, Col } from 'react-bootstrap';
import buseta1Image from '../assets/images/buseta.jpeg';
import buseta2Image from '../assets/images/busetaFrontal.jpeg';
import cascadaImage from '../assets/images/playa.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    // Datos de los vehículos
    const vehicles = [
        {
            id: 1,
            name: "Hyundai Staria",
            capacity: "6 passengers",
            features: [
                "Air-conditioning",
                "Water"
            ],
            image: buseta1Image
        },
        {
            id: 2,
            name: "Maxus",
            capacity: "9 passengers",
            features: [
                "Air-conditioning",
                "Water"
            ],
            image: buseta2Image
        }
    ];

    return (
        <section
            id="about"
            className="py-5"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${cascadaImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                color: 'white' // Color de texto general claro
            }}
        >
            <Container style={{ position: 'relative', zIndex: 1 }}>
                {/* Sección de información de la empresa */}
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold text-white">About EcoTrip Costa Rica</h2>
                    <p className="lead text-white">Tourist transportation with excellence since 2023</p>

                    <Row className="justify-content-center mt-4">
                        <Col lg={8}>
                            <div className="bg-white p-4 rounded shadow-lg" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                                <p className="mb-4 text-dark">
                                    We are a company specializing in high-quality tourist transportation,
                                    offering personalized services throughout Costa Rica. Our modern fleet
                                    and professional drivers guarantee a safe and comfortable trip.
                                </p>

                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <div className="text-center p-3">
                                        <i className="fas fa-shield-alt text-success fs-1 mb-2"></i>
                                        <h5 className="text-dark">Security</h5>
                                        <p className="small text-muted">Vehicles inspected daily</p>
                                    </div>

                                    <div className="text-center p-3">
                                        <i className="fas fa-map-marked-alt text-success fs-1 mb-2"></i>
                                        <h5 className="text-dark">Coverage</h5>
                                        <p className="small text-muted">Nationwide service</p>
                                    </div>

                                    <div className="text-center p-3">
                                        <i className="fas fa-user-tie text-success fs-1 mb-2"></i>
                                        <h5 className="text-dark">Professionalism</h5>
                                        <p className="small text-muted">Experienced and bilingual drivers</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Sección de vehículos */}
                <div className="mb-5">
                    <h3 className="text-center fw-bold mb-4 text-white">Our Exclusive Fleet</h3>
                    <p className="text-center mb-4 text-white">Modern vehicles for all your transportation needs</p>

                    <Row className="g-4 justify-content-center">
                        {vehicles.map((vehicle) => (
                            <Col key={vehicle.id} lg={6}>
                                <div className="card h-100 border-0 shadow-lg" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                                    <div className="row g-0 h-100">
                                        <div className="col-md-6">
                                            <div className="ratio ratio-16x9 h-100">
                                                <img
                                                    src={vehicle.image}
                                                    alt={vehicle.name}
                                                    className="img-fluid object-fit-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <h4 className="card-title fw-bold text-dark">{vehicle.name}</h4>
                                                <p className="text-muted">
                                                    <i className="fas fa-users me-2"></i>
                                                    Capacity: {vehicle.capacity}
                                                </p>
                                                <ul className="mb-4">
                                                    {vehicle.features.map((feature, index) => (
                                                        <li key={index} className="mb-2 text-dark">
                                                            <i className="fas fa-check-circle text-success me-2"></i>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Sección adicional */}
                <div 
                    className="p-5 rounded-3 text-center text-white shadow-lg" 
                    style={{ 
                        backgroundColor: 'rgba(25, 135, 84, 0.9)',
                        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.69)'
                    }}
                >
                    <h3 className="fw-bold mb-3">Why choose us?</h3>
                    <p className="fs-5 mb-4">
                        More than 10 years of experience transporting tourists safely and comfortably
                    </p>
                    <Button
                        variant="light"
                        size="lg"
                        className="rounded-pill px-4 fw-bold"
                        as={Link}
                        to="/contact"
                    >
                        Contact us
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default AboutSection;