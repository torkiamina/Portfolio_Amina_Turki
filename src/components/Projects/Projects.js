import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import appLivraisonColis from "../../Assets/Projects/app_livraison_colis.png";
import appGestionPaiement from "../../Assets/Projects/app_gestion_paiement.png";
import appGestionProduction from "../../Assets/Projects/app_gestion_production.png";
import appGestionReclamations from "../../Assets/Projects/app_gestion_reclamations.png";
import appCovoiturage from "../../Assets/Projects/app_covoiturage.png";
import { useTranslation, Trans } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <Trans i18nKey="projects.title" components={{
            1: <strong className="purple" />
          }}>
            <strong className="purple">EXPÉRIENCE</strong> PROFESSIONNELLE
          </Trans>
        </h1>
        <p style={{ color: "white" }}>
          {t("projects.subtitle")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appGestionProduction}
              title={t("projects.items.0.title")}
              date="Févr 2024 – Juil 2024"
              description={t("projects.items.0.description")}
              showGhLink={false}
              showDemoLink={true}
              ghLink=""
              demoVideo={require("../../Assets/Videos/Vidéo_Démonstrative_Lynx_ERP.mp4")}
              technologies={["Angular 17", "ASP.NET", "DevExtreme", "SQL Server", "Git", "GitHub"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appCovoiturage}
              title={t("projects.items.1.title")}
              date="Aout 2023 - Sep 2023"
              description={t("projects.items.1.description")}
              ghLink=""
              showGhLink={true}
              showDemoLink={true}
              demoVideo={require("../../Assets/Videos/Vidéo_Démonstrative_ASM.mp4")}
              technologies={["Angular 16", "Laravel 10", "PHP 8", "MySQL", "Git", "GitHub"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appGestionPaiement}
              title={t("projects.items.2.title")}
              date="Févr 2023 – Juin 2023"
              description={t("projects.items.2.description")}
              ghLink=""
              showGhLink={true}
              showDemoLink={true}
              demoVideo={require("../../Assets/Videos/Vidéo_Démonstrative_Logicom.mp4")}
              technologies={["ASP.NET", "React 18", "Flutter 3", "C# 11", "Dart 2", "MySQL", "Git", "GitHub"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appLivraisonColis}
              title={t("projects.items.3.title")}
              date="Février 2021 - Juin 2021"
              description={t("projects.items.3.description")}
              ghLink=""
              showGhLink={false}
              showDemoLink={true}
              demoVideo={require("../../Assets/Videos/Vidéo_Démonstrative_PFE.mp4")}
              technologies={["Laravel 8", "Angular 11", "Ionic 5", "PHP 8", "MySQL", "Git", "GitHub"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appGestionReclamations}
              title={t("projects.items.4.title")}
              date="Janv 2020 – Février 2020"
              description={t("projects.items.4.description")}
              ghLink=""
              showGhLink={true}
              showDemoLink={true}
              demoVideo={require("../../Assets/Videos/Vidéo_Démonstrative_All_Soft_Multimédia.mp4")}
              technologies={["Laravel 6", "Angular 9", "PHP 7","MySQL","Git", "GitHub"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;