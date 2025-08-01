import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/Dropdown"; // <-- Import du Dropdown
import "../i18n"; 
import ReactCountryFlag from "react-country-flag";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const { t, i18n } = useTranslation();

  // Gestion du scroll
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); 
    localStorage.setItem("lang", lang); 
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} width={80} alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("navbar.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("navbar.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                {t("navbar.projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("navbar.resume")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="lang-dropdown">
              <Dropdown>
                <Dropdown.Toggle className="lang-dropdown-toggle" id="dropdown-lang">
                  {i18n.language === "fr" ? (
                    <>
                      <ReactCountryFlag countryCode="FR" svg style={{ marginRight: "6px" }} /> Français
                    </>
                  ) : (
                    <>
                      <ReactCountryFlag countryCode="GB" svg style={{ marginRight: "6px" }} /> English
                    </>
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleLanguageChange("fr")}>
                    <ReactCountryFlag countryCode="FR" svg style={{ marginRight: "6px" }} />
                    Français
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguageChange("en")}>
                    <ReactCountryFlag countryCode="GB" svg style={{ marginRight: "6px" }} />
                    English
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
