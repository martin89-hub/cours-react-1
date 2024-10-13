import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="portfolio-title">PORTFOLIO</h2>
        <p className="portfolio-subtitle">Voici quelques-unes de mes réalisations.</p>
        <div className="portfolio-cards">
          <div className="card">
            <img src="path_to_fresh_food_image.jpg" alt="Fresh food" />
            <h3>Fresh food</h3>
            <p>Réalisation d'un site avec commande en ligne.</p>
            <button className="btn">Voir</button>
            <p className="tech">Site réalisé avec PHP et MySQL</p>
          </div>
          <div className="card">
            <img src="path_to_restaurant_akira_image.jpg" alt="Restaurant Akira" />
            <h3>Restaurant Akira</h3>
            <p>Réalisation d'un site vitrine.</p>
            <button className="btn">Voir</button>
            <p className="tech">Site réalisé avec WordPress</p>
          </div>
          <div className="card">
            <img src="path_to_espace_bien_etre_image.jpg" alt="Espace bien-être" />
            <h3>Espace bien-être</h3>
            <p>Réalisation d'un site vitrine pour un praticien de bien-être.</p>
            <button className="btn">Voir</button>
            <p className="tech">Site réalisé en HTML/CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
