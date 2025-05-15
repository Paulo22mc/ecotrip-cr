import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getTranslations, getCurrentLanguage, setCurrentLanguage } from '../services/languageService';

const TourismNavbar = () => {
  const [currentLanguage, setCurrentLanguageState] = useState(getCurrentLanguage());
  const [translations, setTranslations] = useState(getTranslations(currentLanguage));

  const languages = [
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' }
  ];

  useEffect(() => {
    const handleLanguageChange = () => {
      const lang = getCurrentLanguage();
      setCurrentLanguageState(lang);
      setTranslations(getTranslations(lang));
    };

    document.addEventListener('languageChanged', handleLanguageChange);
    return () => {
      document.removeEventListener('languageChanged', handleLanguageChange);
    };
  }, []);

  const handleLanguageSelect = (langCode) => {
    setCurrentLanguage(langCode);
  };

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand
          as={Link}
          to="#"
          className="d-flex align-items-center text-success fw-bold fs-3 brand-hover"
        >
          <i className="fas fa-shuttle-van me-2"></i>
          EcoTrip Costa Rica
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" className="custom-toggler" />

        <Navbar.Collapse id="navbar-content">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="mx-2 fw-medium nav-link-custom"
            >
              <i className="fas fa-home me-1"></i>{translations.home}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Transport"
              className="mx-2 fw-medium nav-link-custom"
            >
              <i className="fas fa-bus me-1"></i>{translations.transport}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Tours"
              className="mx-2 fw-medium nav-link-custom"
            >
              <i className="fas fa-route me-1"></i>{translations.tours}
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/About"
              className="mx-2 fw-medium nav-link-custom"
            >
              <i className="fas fa-info-circle me-1"></i>{translations.about}
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <Button
              variant="warning"
              as={Link}
              to="/contact"
              className="rounded-pill px-4 fw-bold me-3 position-relative book-btn"
            >
              <i className="fas fa-calendar-alt me-2"></i>{translations.bookNow}
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle pulse-dot">
                <span className="visually-hidden">New alerts</span>
              </span>
            </Button>

            <NavDropdown
              title={<><i className="fas fa-language me-1"></i>{currentLanguage}</>}
              id="language-dropdown"
              align="end"
              className="border rounded-pill px-3 language-dropdown"
            >
              {languages.map((lang) => (
                <NavDropdown.Item
                  key={lang.code}
                  active={currentLanguage === lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className="dropdown-item-custom"
                >
                  {lang.flag} {lang.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TourismNavbar; 