import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaEnvelope, FaMapMarkerAlt, FaSkype, FaPhoneAlt } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright mt-2">
          <p style={{color:'#fff', fontSize: '1.2rem'}}><FaSkype className="icon" /> Tsiferaniaina Angelot</p>
          <p style={{color:'#fff', fontSize: '1.2rem'}}><FaEnvelope className="icon" /> angelottsiferana@gmail.com</p>
        </Col>
        <Col md="4" className="footer-copywright">
          <p style={{color:'#fff', fontSize: '1.2rem'}}>
          <FaMapMarkerAlt className="icon" /> Antananarivo, Madagascar
          </p>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Tsioarana/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/tsioarana.nokasaina"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />

              </a>
            </li>
          </ul>
          <p style={{color:'#fff', fontSize: '1.2rem'}}><FaPhoneAlt className="icon" /> +261 33 04 160 79</p>
        </Col>
        <Col md="12" className="footer-copywright">
          <h3 style={{color: '#61dafb'}}>© Angelot, {year} </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
