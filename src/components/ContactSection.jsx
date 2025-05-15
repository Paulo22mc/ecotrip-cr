import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ContactSection = () => {
  const location = useLocation();
  const [prefilledMessage, setPrefilledMessage] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const messageParam = queryParams.get('message');
    if (messageParam) {
      setPrefilledMessage(messageParam);
    }
  }, [location.search]);

  return (
    <section id="contact" className="py-5 my-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Contact Us</h2>
          <p className="lead text-muted">Get in touch for bookings and inquiries</p>
        </div>

        <Row className="justify-content-center g-4">
          {/* Contact Form Column */}
          <Col md={8} lg={6}>
            <div className="card shadow-sm border-0 p-4">
              <Form method="POST" action="https://formspree.io/f/meogvrbv">
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" name="phone" placeholder="Enter your phone number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Type your message here"
                    value={prefilledMessage}
                    onChange={(e) => setPrefilledMessage(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="text-center mt-4">
                  <Button variant="success" type="submit" size="lg" className="me-3 px-4">
                    <i className="fas fa-paper-plane me-2"></i>Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>

          {/* WhatsApp Contact Column */}
          <Col md={8} lg={6}>
            <div className="card shadow-sm border-0 p-4 h-100">
              <div className="text-center">
                <div className="bg-success bg-opacity-10 p-4 rounded-3 mb-4">
                  <i className="fab fa-whatsapp text-success fs-1 mb-3"></i>
                  <h3 className="fw-bold">WhatsApp Chat</h3>
                  <p className="mb-4">For immediate assistance, message us directly on WhatsApp</p>
                  <Button
                    variant="success"
                    size="lg"
                    href={`https://wa.me/50689768131?text=${encodeURIComponent(
                      "Hello EcoTrip Costa Rica! I'm interested in your transportation services and would like more information about:"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4"
                  >
                    <i className="fab fa-whatsapp me-2"></i>Chat Now
                  </Button>
                </div>

                <div className="mt-4">
                  <h4 className="fw-bold mb-3">Other Contact Methods</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-phone-alt text-success me-2"></i>
                      <strong>Phone:</strong> +506 XXXX-XXXX
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-envelope text-success me-2"></i>
                      <strong>Email:</strong> ecotripcr@gmail.com
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt text-success me-2"></i>
                      <strong>Office:</strong> Alajuela, Costa Rica
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
