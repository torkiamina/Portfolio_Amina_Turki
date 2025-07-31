import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import appLivraisonColis from "../../Assets/Projects/app_livraison_colis.png";
import appGestionPaiement from "../../Assets/Projects/app_gestion_paiement.png";
import appGestionProduction from "../../Assets/Projects/app_gestion_production.png";
import appGestionReclamations from "../../Assets/Projects/app_gestion_reclamations.png";
import appCovoiturage from "../../Assets/Projects/app_covoiturage.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">EXPÉRIENCE </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici un aperçu de mes réalisations et expériences professionnelles.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appGestionProduction}
              title="Stage de fin d’études | Lynx-ERP - Sfax, Tunisie"
              date="Févr 2024 – Juil 2024"
              description="Développement d'une application web optimisant la gestion des productions pour réduire les coûts et améliorer le flux de production."
             showGhLink={false}     
              showDemoLink={true}   
              ghLink=""   
              demoVideo={require("../../Assets/Videos/Vidéo_Démonstrative_Lynx_ERP.mp4")} 
              technologies={["Angular 17", "ASP.NET", "DevExtreme", "SQL Server", "Git","GitHub"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appCovoiturage}
              title="Stage professionnel | All Soft Multimédia (ASM) - Sfax, Tunisie"
              date="Aout 2023 - Sep 2023"
              description="Développement d'une application web pour la gestion de covoiturage permettant aux utilisateurs de proposer et de rechercher des covoiturages pour les trajets longue distance."
              ghLink=""
              showGhLink={true}      
              showDemoLink={true} 
              demoVideo={require("../../Assets/Videos/Vidéo_Démonstrative_ASM.mp4")} 
              technologies={["Angular 16", "Laravel 10", "PHP 8", "My SQL", "Git","GitHub"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appGestionPaiement}
              title="Stage de fin d’année | Logicom - Sfax, Tunisie"
              date="Févr 2023 – Juin 2023"
              description="Développement d’une application web et mobile pour la gestion des paies du personnel pour le client SOS."
             ghLink="" 
            showGhLink={true}      
             showDemoLink={true}   
            demoVideo={require("../../Assets/Videos/Vidéo_Démonstrative_Logicom.mp4")} 
              technologies={["ASP.NET", "React 18", "Flutter 3", "C# 11", "Dart 2", "MySQL", "Git","GitHub"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appLivraisonColis}
              title="Stage de fin d’études | Institut supérieur des études technologiques (ISET) - Sfax, Tunisie"
              date="Février 2021 - Juin 2021"
              description="Développement d'une application web et mobile de gestion de livraison des colis pour gérer l’acheminement des colis reçus d’un expéditeur vers un destinataire."
              ghLink=""
              showGhLink={false}      
             showDemoLink={true}   
              demoVideo={require("../../Assets/Videos/Vidéo_Démonstrative_PFE.mp4")} 
              technologies={["Laravel 8", "Angular 11", "Ionic 5", "PHP 8", 'MySQL' ,"Git","GitHub"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appGestionReclamations}
              title="Stage professionnel | All Soft Multimédia (ASM) - Sfax, Tunisie"
              date="Janv 2020 – Février 2020"
              description="Développement d'une application web de gestion des reclamations qui aide les gens à communiquer avec la municipalité et permettant d'exprimer leurs plaintes en ligne."
             ghLink=""
            showGhLink={true}      
             showDemoLink={true}   
              demoVideo={require("../../Assets/Videos/Vidéo_Démonstrative_All_Soft_Multimédia.mp4")} 
              technologies={["Laravel 6", "Angular 9", "PHP 7", "Git","GitHub"]}

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
