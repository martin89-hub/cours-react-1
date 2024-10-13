
import React from 'react';
import { Accordion, Card } from 'react-bootstrap';


const Legal = () => {
  return (
    <div className="legal-page">
      <h1 className="legal-title">MENTIONS LÉGALES</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            
          <div class="contact-info">
              
              <div class="contact-card">
                <h3>John Doe</h3>
                <p><span class="contact-icon">📍</span>Bourgogne-Franche-Comté, 71600 Paray-Le-Monial, France </p>
                <p><span class="contact-icon">📞</span>07 79 87 25 36 </p>
                <p><span class="contact-icon">✉️</span> martinananga@gmail.com</p>
              </div>
          </div>



          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>

          <Accordion.Body>
            L'hébergeur du site est OVHcloud.<br />
            Adresse : 2 rue Kellermann, 59100 Roubaix, France.<br />
            <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer">Site Web d'OVH</a>
          </Accordion.Body>

        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <h3>Crédits</h3>
            <p>Site développé par John Doe, étudiant du CEF.</p>
            <p>
              Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.
            </p>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Legal;
