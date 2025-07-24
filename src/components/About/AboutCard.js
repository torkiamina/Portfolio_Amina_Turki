import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           

           👋 Bonjour à tous, je m'appelle, <span className="purple"> Amina Turki </span>
            originaire <span className="purple"> Sfax, Tunisie.</span>
            <br />
            Je suis développeuse web full-stack, passionnée par la création de solutions logicielles performantes et innovantes.
            
            <br />
            <br />
           🎓 Titulaire d’un diplôme d’ingénieur en génie logiciel et informatique décisionnelle obtenu à <span className="purple"> l’Institut International de Technologie (IIT) </span> en 2024, j’ai également obtenu une licence appliquée en développement des systèmes d’information à <span className="purple"> l’Institut Supérieur des Études Technologiques (ISET) </span> de Sfax en 2021.
           
          </p>
      
          <p style={{ textAlign: "justify" }}>

          Ces formations m’ont permis de développer des compétences solides en développement web et mobile, en gestion de projets, ainsi qu'en résolution de problèmes complexes.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            « Créez avec passion, innovez avec impact. » {" "}
            {/* « Mon objectif : créer des solutions qui comptent. » */}
          </p>
          <footer className="blockquote-footer">Amina Turki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
