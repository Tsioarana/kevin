import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dev.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={6} className="home-about-description">
            <h1>
              Je suis <span className="purple"> ANGELOT </span> Développeur Freelance
            </h1>
            <p className="home-about-body">
            Je suis développeur web freelance basé à Madagascar et toujours disponible pour vos projets.
        Avec mon équipe de développeurs, rédacteurs et graphistes, nous créons des solutions numériques complètes.
        N’hésitez pas à me contacter pour discuter de vos besoins et concrétiser vos idées !

            </p>
          </Col>
          <Col md={6} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;






// import React, { Suspense } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei"; // For camera controls
// import { useGLTF } from "@react-three/drei"; // To load .gltf files
// import myImg from "../../Assets/developpeur.png";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// // Loader component for fallback while loading the 3D model
// const Loader = () => <div>Loading...</div>;

// // Model component to load your .gltf file
// const Model = () => {
//   const { scene } = useGLTF("/desktop_pc/scene.gltf"); // Adjust the path as necessary
//   return <primitive object={scene} />;
// };

// function Home2() {
//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Container>
//         <Row>
//           <Col md={6} className="home-about-description">
//             <h1 style={{ fontSize: "3.6em" }}>
//               Je suis <span className="purple"> ANGELOT </span> Développeur Freelance
//             </h1>
//             <p className="home-about-body">
//               Je suis développeur web freelance basé à Madagascar et toujours disponible pour vos projets.
//               Avec mon équipe de développeurs, rédacteurs et graphistes, nous créons des solutions numériques complètes.
//               N’hésitez pas à me contacter pour discuter de vos besoins et concrétiser vos idées !
//             </p>
//           </Col>
//           <Col md={6} className="myAvatar">
//             <Suspense fallback={<Loader />}>
//               <Canvas style={{ height: "400px" }}>
//                 <ambientLight intensity={0.5} /> {/* Basic ambient light */}
//                 <pointLight position={[10, 10, 10]} /> {/* Point light */}
//                 <Model />
//                 <OrbitControls /> {/* Enable camera controls */}
//               </Canvas>
//             </Suspense>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Home2;
