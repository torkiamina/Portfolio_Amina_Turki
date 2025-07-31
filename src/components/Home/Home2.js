import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/amina.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {/* LET ME <span className="purple"> INTRODUCE </span> MYSELF */}
             Laissez-moi <span className="purple"> me présenter </span>
            </h1>

            <p className="home-about-body">
              💻 Je suis passionnée par le développement web et mobile et j'aime transformer des idées en applications innovantes.

              <br />
              <br />🔹Je maîtrise des technologies variées comme <b className="purple"> Angular, ASP.NET, Laravel, React.js </b>ainsi que des bases de données 
              
              <b className="purple"> MySQL, SQL Server, MongoDB.</b>
             
              <br />
              <br />
              🚀 Mes centres d’intérêt : le développement de solutions web et mobiles innovantes et l’exploration de nouvelles technologies.

          
              <br />
              <br />

              ⚡ J’aime relever des défis techniques, créer des applications performantes et améliorer l’expérience utilisateur.
                  <br />
              <br />
             📖 Curieuse et passionnée, je me forme en continu pour rester à jour sur les dernières tendances du développement.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg}  className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à me <span className="purple">contacter </span>
            </p>
            <ul className="home-about-social-links">

               <li className="social-icons">
                <a
                  href="https://linkedin.com/in/amina-turki"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://github.com/torkiamina"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/amina.turkii"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/amina.turkii/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      
    </Container>
  );
}
export default Home2;
