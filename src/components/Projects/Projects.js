import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import leaf from "../../Assets/Projects/projet1.png";
import emotion from "../../Assets/Projects/projet2.png";
import editor from "../../Assets/Projects/projet3.png";
import chatify from "../../Assets/Projects/projet4.png";
import suicide from "../../Assets/Projects/projet5.png";
import bitsOfCode from "../../Assets/Projects/projet6.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Projets Récents <strong className="purple">Réalisations</strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques exemples de projets sur lesquels j'ai travaillé :
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="I-Bikao Boutique"
                description={
                  <>
                    Création d'un site e-commerce pour la boutique I_Bikao.
                    Développé avec <span style={{ color: "#0D4F8B" }}>#Django</span>, <span style={{ color: "#F7DF1E" }}>#JavaScript</span> et <span style={{ color: "#563D7C" }}>#Bootstrap</span>,
                    ce projet permet aux utilisateurs de parcourir et d'acheter des produits en ligne de manière intuitive.
                  </>
                }
                ghLink="https://github.com/Tsioarana/ibikao"
              />
            </Tilt>
          </Col>

          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Tours et Rencontres"
                description={
                  <>
                    Développement d'un site web pour une agence de voyage à Madagascar, axé sur le tourisme.
                    Ce projet utilise <span style={{ color: "#E44D26" }}>#HTML</span>, <span style={{ color: "#563D7C" }}>#Bootstrap</span> et <span style={{ color: "#F7DF1E" }}>#JavaScript</span>
                    pour faciliter la réservation et la planification d'activités touristiques.
                  </>
                }
                ghLink="https://github.com/Tsioarana/Rencontres"
              />
            </Tilt>
          </Col>

          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="Messenger"
                description={
                  <>
                    Création d'une application de messagerie en utilisant <span style={{ color: "#899DAD" }}>#PHP</span> et <span style={{ color: "#E44D26" }}>#MySQL</span>.
                    Développée avec <span style={{ color: "#E44D26" }}>#HTML</span>, <span style={{ color: "#563D7C" }}>#CSS</span> et <span style={{ color: "#0769AD" }}>#jQuery</span>,
                    ce projet permet aux utilisateurs de communiquer facilement et efficacement en temps réel.
                  </>
                }
                ghLink="https://github.com/Tsioarana/jahdy_chat"
              />
            </Tilt>
          </Col>

          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={leaf}
                isBlog={false}
                title="Fast FOOD"
                description={
                  <>
                    Développement d'un projet de restaurant de fast-food en utilisant uniquement le frontend.
                    Créé avec <span style={{ color: "#61DAFB" }}>#React.js</span> et <span style={{ color: "#563D7C" }}>#Bootstrap</span>,
                    ce projet met en avant une interface utilisateur dynamique et interactive.
                  </>
                }
                ghLink="https://github.com/Tsioarana/commerceReact"
              />
            </Tilt>
          </Col>

          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={suicide}
                isBlog={false}
                title="Marketplace"
                description={
                  <>
                    Développement d'une plateforme de marketplace en utilisant <span style={{ color: "#0D4F8B" }}>#Django</span> et <span style={{ color: "#F7DF1E" }}>#JavaScript</span>.
                    Ce projet connecte acheteurs et vendeurs, facilitant les transactions en ligne, avec <span style={{ color: "#563D7C" }}>#Bootstrap</span> pour le design.
                  </>
                }
                ghLink="https://github.com/Tsioarana/Marketplace"
              />
            </Tilt>
          </Col>

          <Col md={4} className="project-card">
            <Tilt>
              <ProjectCard
                imgPath={emotion}
                isBlog={false}
                title="Malagasy Tsara Vokatra"
                description={
                  <>
                    Un projet de hackathon réalisé à l'Université Insi, centré sur l'agriculture intelligente.
                    Créé avec <span style={{ color: "#E44D26" }}>#HTML</span>, <span style={{ color: "#563D7C" }}>#CSS</span> et <span style={{ color: "#F7DF1E" }}>#JavaScript</span>,
                    ce projet vise à améliorer les pratiques agricoles grâce à des solutions technologiques innovantes.
                  </>
                }
                ghLink="https://github.com/Tsioarana/hackaton-front"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
