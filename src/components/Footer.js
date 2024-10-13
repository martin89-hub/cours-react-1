import React, { useState, useEffect } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne 1 : Infos du développeur */}
        <div className="footer-column">
          <h3>John Doe</h3>
          <p>Bourgogne-Franche-Comté<br />71600 Paray-Le-Monial, France<br />Téléphone : 07 79 87 25 36</p>
          <div className="social-icons">
            <a href="https://github.com/martin89-hub" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <FaGithub />
            </a>
            <a href="https://x.com/MartinAnanga?t=JLm0hzpuG7B3iG6jBlug9A&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/martin-ananga-379444158" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Colonne 2 : Liens utiles */}
        <div className="footer-column">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Me contacter</a></li>
            <li><a href="/legal">Mentions légales</a></li>
          </ul>
        </div>

        {/* Colonne 3 : Réalisations */}
        <div className="footer-column">
          <h3>Mes derniers articles</h3>
          <ul>
            <li><a href="/portfolio#project1">Commencer avec du HTML et CSS</a></li>
            <li><a href="/portfolio#project2">Les fondamentaux de JavaScript pour les débutants</a></li>
            <li><a href="/portfolio#project3">Gestion de version avec Git et GitHu</a></li>
            <li><a href="/portfolio#project3">Design Responsive</a></li>
            <li><a href="/portfolio#project3">Introduction aux API</a></li>
            <li><a href="/portfolio#project3">Déployer votre premier site web:Un guide pour débutant</a></li>
          </ul>
        </div>

        {/* Colonne 4 : Articles de blog */}
        <div className="footer-column">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li><a href="/blog#article1">Dynamiser un Espace de Commentaire</a></li>
            <li><a href="/blog#article2">Réaliser une maquette</a></li>
            <li><a href="/blog#article3">Créer un CV</a></li>
          </ul>
        </div>
      </div>

      {/* Lien retour en haut */}
      <div className="scroll-top" style={{ display: showScrollTop ? 'block' : 'none' }}>
        <a href="#" className="scroll-top-btn">Retour en haut</a>
      </div>

      {/* Ligne de copyright */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} John Doe. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
