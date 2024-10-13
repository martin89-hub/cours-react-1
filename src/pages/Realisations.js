import React from 'react';

// Données des projets
const projects = [
  {
    id: 'project1',
    title: 'Dynamiser un Espace de Commentaire',
    description: "Mettre en place un formulaire de contact fontionnel.",
    link: 'https://',
    image: 'https://img.freepik.com/free-vector/dating-app-concept-web-page_23-2148282720.jpg?ga=GA1.1.390738756.1728733913&semt=ais_hybrid/300x200', // Remplace par le lien de l'image
    details: 'Réalisé avec HTML,CSS,JavaScript',
  },
  {
    id: 'project2',
    title: 'Réaliser une maquette ',
    description: "Création pour application mobile/desktop.",
    link: 'https://github.com/martin89-hub', 
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?ga=GA1.1.390738756.1728733913&semt=ais_hybrid/300x200',
    details: 'Technologie utilisée;Figma',
  },
  {
    id: 'project3',
    title: 'Créer un CV',
    description: "Réalisation d'un CV en ligne.",
    link: 'https://github.com/martin89-hub',
    image: 'https://img.freepik.com/premium-photo/resume-icon-cv-employment-art-logo-illustration_762678-17515.jpg?ga=GA1.1.390738756.1728733913&semt=ais_hybrid/300x200', // Remplace par le lien de l'image
    details: 'Site réalisé en HTML/CSS',
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>PORTFOLIO</h1>
      <p>Voici quelques-unes de mes réalisations.</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-project-btn"
            >
              Voir
            </a>
            <p className="project-details">{project.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
