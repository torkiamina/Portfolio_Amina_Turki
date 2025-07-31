import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";  
import Badge from "react-bootstrap/Badge";

function ProjectCards(props) {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath}  alt="card-img" />
      <Card.Body className="project-card-body">
        <Card.Title className="project-card-title" style={{ fontSize: "1rem" }}><span className="purple">{props.title}</span></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }} className="project-card-description">
          {props.description}
        </Card.Text>
       
          <div className="mb-2 project-card-techs">
        {props.technologies && props.technologies.map((tech, index) => (
          <Badge bg="secondary" className="me-1" key={index}>
            {tech}
          </Badge>
        ))}
      </div>

          <div className="project-card-buttons">
          <Button
            variant="primary"
            href={props.ghLink || "#"}
            target="_blank"
            disabled={!props.showGhLink} 
          >
            <BsGithub /> &nbsp; GitHub
          </Button>

           <Button
              variant="primary"
              disabled={!props.showDemoLink}
              onClick={() => setShowModal(true)}  
            >
              <CgWebsite /> &nbsp; Demo
            </Button>


            
        </div>
      </Card.Body>
    </Card>

     <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Demo Vidéo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <video width="100%" height="auto" controls>
            <source src={props.demoVideo} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </Modal.Body>
      </Modal>
</>
  );
}
export default ProjectCards;
