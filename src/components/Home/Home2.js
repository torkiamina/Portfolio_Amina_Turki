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

import { useTranslation, Trans } from "react-i18next";

function Home2() {
    const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            {/* <h1 style={{ fontSize: "2.6em" }}>
             Laissez-moi <span className="purple"> me présenter </span>
            </h1> */}

          <h1 style={{ fontSize: "2.6em" }}>
            <Trans i18nKey="introduce">
              Laissez-moi <span className="purple">me présenter</span>
            </Trans>
          </h1>
          <p className="home-about-body">
  {t("homeDescription.part1")}
  <br />
  <br />
  <Trans i18nKey="homeDescription.part2">
    🔹 I master various technologies like <b className="purple">Angular, ASP.NET, Laravel, React.js</b> as well as databases <b className="purple">MySQL, SQL Server, MongoDB</b>.
  </Trans>
  <br />
  <br />
  {t("homeDescription.part3")}
  <br />
  <br />
  {t("homeDescription.part4")}
  <br />
  <br />
  {t("homeDescription.part5")}
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
          <h1>{t("findMe")}</h1>
        
            <Trans i18nKey="contactMe">N'hésitez pas à me <span className="purple">contacter</span></Trans>
            <br />
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
