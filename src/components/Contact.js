import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import contact from '../Assets/contact.png'
import './Contact.css'; // Ensure to import your custom CSS file
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import Tilt from "react-parallax-tilt";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // Added subject to the state
    message: ''
  });
  const [buttonText, setButtonText] = useState("Envoyer");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Envoyer en cours...");

    // Sending the email via EmailJS
    emailjs.send('service_vmlfaes', 'template_k5zmc4a', {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject, // Include subject in the email
      message: formData.message,
    }, 'w871e_wRaSinYA_iA')
      .then((result) => {
          console.log(result.text);
          setButtonText("Envoyer");
          alert("Message envoyé avec succès!");
          // Reset form after sending
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
      }, (error) => {
          console.log(error.text);
          setButtonText("Envoyer");
          alert("Erreur lors de l'envoi, veuillez réessayer.");
      });
  };

  return (
    <div className="contact-container">
      <h1 className="project-heading">
        Nous <strong className="purple">Contacter</strong>
      </h1>
      <p className='mb-5 fs-4' style={{ color: "white" }}>
        Envoyez-moi un message pour discuter ou poser des questions.
      </p>
      <Row>
        {/* Column 1: Contact Form (set col size for small screens) */}
        <Col xs={12} md={5} className="contact-form-col">
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-4 form-group" controlId="formName">
              <Form.Control
                type="text"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control haha"
              />
              <label htmlFor="formName">Nom</label>
            </Form.Group>

            <Form.Group className="mb-4 form-group" controlId="formEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control haha"
              />
              <label htmlFor="formEmail">Email</label>
            </Form.Group>

            <Form.Group className="mb-4 form-group" controlId="formSubject">
              <Form.Control
                type="text"
                name="subject"
                placeholder=" "
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-control haha"
              />
              <label htmlFor="formSubject">Objet</label>
            </Form.Group>

            <Form.Group className="mb-4 form-group" controlId="formMessage">
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control"
              />
              <label htmlFor="formMessage">Message</label>
            </Form.Group>

            <Button variant="primary" type="submit" className="contact-btn">
              {buttonText}
            </Button>
          </Form>
        </Col>

        {/* Column 2: Image (adjust stacking for small screens) */}
        <Col xs={12} md={7} className="contact-image-col">
          <Tilt>
            <img src={contact} alt="Contact" className="contact-image" />
          </Tilt>
        </Col>
      </Row>

    </div>
  );
};

export default Contact;
