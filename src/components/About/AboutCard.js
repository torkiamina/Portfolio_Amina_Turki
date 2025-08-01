import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation, Trans } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <Trans i18nKey="aboutCard.greeting" components={{
              1: <span className="purple" />,
              3: <span className="purple" />
            }}>
              👋 Hello everyone, my name is <span className="purple">Amina Turki</span> from <span className="purple">Sfax, Tunisia</span>.
            </Trans>
            <br />
            {t("aboutCard.intro")}
            <br />
            <br />
            <Trans i18nKey="aboutCard.education1" components={{
              1: <span className="purple" />,
              3: <span className="purple" />
            }}>
              🎓 Holder of an engineering degree at <span className="purple">IIT</span> and also studied at <span className="purple">ISET</span> Sfax.
            </Trans>
          </p>
      
          <p style={{ textAlign: "justify" }}>
            {t("aboutCard.skills")}
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            {t("aboutCard.quote")}
          </p>
          <footer className="blockquote-footer">{t("aboutCard.author")}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;