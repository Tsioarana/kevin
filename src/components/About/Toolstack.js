import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects } from "react-icons/si";

const iconStyles = {
  photoshop: { color: "#31A8FF" }, // Color for Photoshop
  illustrator: { color: "#FF9A00" }, // Color for Illustrator
  afterEffects: { color: "#A32D64" }, // Color for After Effects
};

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.photoshop}>
        <SiAdobephotoshop /> {/* Icon for Photoshop */}
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.illustrator}>
        <SiAdobeillustrator /> {/* Icon for Illustrator */}
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.afterEffects}>
        <SiAdobeaftereffects /> {/* Icon for After Effects */}
      </Col>
    </Row>
  );
}

export default Toolstack;
