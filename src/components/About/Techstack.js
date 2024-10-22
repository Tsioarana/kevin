import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaPhp, FaReact, FaVuejs, FaNodeJs, FaAngular, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSymfony, SiDjango, SiFlutter, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const iconStyles = {
  html: { color: "#E44D26" },
  css: { color: "#1572B6" },
  tailwind: { color: "#06B6D4" },
  bootstrap: { color: "#563D7C" },
  node: { color: "#8CC84B" },
  react: { color: "#61DAFB" },
  next: { color: "rgb(64 60 60)" },
  vue: { color: "#42b883" },
  angular: { color: "#DD0031" },
  django: { color: "#0C4B33" },
  php: { color: "#777BBF" },
  symfony: { color: "rgb(64 60 60)" },
  git: { color: "#F05032" },
  flutter: { color: "#02569B" },
  reactNative: { color: "#61DAFB" },
  js: { color: "#F7DF1E" }, // Color for JavaScript
  mongodb: { color: "#47A248" }, // Color for MongoDB
  mysql: { color: "#00758F" }, // Color for MySQL
};

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.html}>
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.css}>
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.tailwind}>
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.bootstrap}>
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.js}>
        <FaJsSquare />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.node}>
        <FaNodeJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.mongodb}>
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.react}>
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.next}>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.vue}>
        <FaVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.angular}>
        <FaAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.django}>
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.php}>
        <FaPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.symfony}>
        <SiSymfony />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.mysql}>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.flutter}>
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={iconStyles.git}>
        <FaGitAlt />
      </Col>
    </Row>
  );
}

export default Techstack;
