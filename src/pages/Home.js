import React from 'react';
import { ProgressBar } from 'react-bootstrap';


const Home = () => {
  return (
    <>
      {/* Section Hero avec l'image de fond */}
      <section className="hero-section">
        <div className="overlay">
          <div className="hero-content">
            <h1>Bonjour,je suis John Doe</h1>
            <h2>Développeur Web Full Stack </h2>
            <a href="#about" className="btn hero-btn">En savoir plus</a>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="about-section">
        <div className="container about-container">
          {/* À propos à gauche */}
          <div className="about-left">
            <h2>À propos de John Doe</h2>
            <p>Je suis un jeune développeur en formation au Centre de Formation CEF, passionné par le développement web</p>
            <p>Je maîtrise des langages tels que HTML, CSS, et JavaScript et je m'intéresse à l'UX/UI design.</p>
            <p> Mon objectif est de continuer à progresser et d'élargir mes compétences en React et Node.js, tout en réalisant des projets innovants et utiles pour les utilisateurs.</p>
          </div>

          {/* Photo et compétences à droite */}
          <div className="about-right">
            <img src="https://img.freepik.com/free-photo/people-working-office_329181-13532.jpg?ga=GA1.2.390738756.1728733913&semt=ais_hybrid/300x200" alt="John Doe" className="about-photo" />
            <h3>Compétences :</h3>
            <div className="skill">
              <p>HTML</p>
              <ProgressBar now={90} label={`${90}%`} variant="success" />
            </div>
            <div className="skill">
              <p>CSS</p>
              <ProgressBar now={85} label={`${85}%`} variant="info" />
            </div>
            <div className="skill">
              <p>JavaScript</p>
              <ProgressBar now={80} label={`${80}%`} variant="warning" />
            </div>
            <div className="skill">
              <p>React</p>
              <ProgressBar now={75} label={`${75}%`} variant="danger" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
