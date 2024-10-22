import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'; // Importation des icônes
import './Service.css'; // Importation du fichier CSS pour les styles personnalisés

const Service = () => {
  return (
    <div className="service-container py-5 mt-5" id='services'>
      <Container>
        <h1 className="text-center service-title py-5 mb-5">
          Nos <strong className="purple">Services</strong>
        </h1>
        <p className="text-center service-description mb-5">
          Découvrez nos offres pour vous accompagner dans le développement <br /> de votre présence digitale.
        </p>
        <Row>
          {/* Card 1: Développement Web */}
          <Col md={4}>
            <Card className="service-card">
              <Card.Body>
                <Card.Title className="text-center mb-5">Développement Web</Card.Title>
              <div className="icon-container">
                <FaLaptopCode size={80} className="service-icon" />
              </div>
                <Card.Text className="text-center">
                  Nous créons des sites web modernes et responsives pour répondre à vos besoins.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2: Développement Mobile */}
          <Col md={4}>
            <Card className="service-card">
              <Card.Body>
                <Card.Title className="text-center mb-5">Développement Mobile</Card.Title>
              <div className="icon-container">
                <FaMobileAlt size={80} className="service-icon" />
              </div>
                <Card.Text className="text-center">
                  Applications mobiles sur mesure, optimisées pour iOS et Android.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3: Graphisme */}
          <Col md={4}>
            <Card className="service-card">

              <Card.Body>
                <Card.Title className="text-center mb-5">Graphisme</Card.Title>
                <div className="icon-container">
                <FaPaintBrush size={80} className="service-icon" />
              </div>
                <Card.Text className="text-center">
                  Création graphique innovante pour booster votre image de marque.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
