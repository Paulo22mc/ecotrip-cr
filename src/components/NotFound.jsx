// src/components/NotFound.js
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="mb-4">Página no encontrada</h2>
      <p className="mb-4">La página que estás buscando no existe o ha sido movida.</p>
      <Button as={Link} to="/" variant="success" size="lg">
        <i className="fas fa-home me-2"></i>Volver al inicio
      </Button>
    </div>
  );
};

export default NotFound;