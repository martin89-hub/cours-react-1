import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Blog = () => {
  const articles = [
    {
      title: 'Commencer avec du HTML et CSS',
      date: '22 octobre 2023',
      image: 'https://img.freepik.com/premium-vector/hybrid-mobile-app-concept_118813-22096.jpg?ga=GA1.2.390738756.1728733913&semt=ais_hybrid/300x200',
      description: (
        <p>
          Cet article couvre les balises du HTML et CSS, en expliquant comment construire une page web et la styliser. 
          Il aborde les balises de structure comme <code>header</code>, <code>footer</code> et <code>article</code>.
        </p>
      ),
      link: 'https://www.alsacreations.com/article',
    },
    {
      title: 'Les fondamentaux de JavaScript pour les débutants',
      date: '20 novembre 2023',
      image: 'https://img.freepik.com/premium-photo/big-data-storage-cloud-computing-representation-programming-code_372999-2003.jpg?ga=GA1.2.390738756.1728733913&semt=ais_hybrid/300x200',
      description: (
        <p>
          Cet article introduit JavaScript en tant que langage de programmation. Il couvre les bases : variables, fonctions, conditions, boucles, ainsi que la manipulation du DOM.
        </p>
      ),
      link: 'https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps',
    },
    {
      title: 'Gestion de version avec Git et GitHub',
      date: '15 décembre 2023',
      image: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149383352.jpg?ga=GA1.2.390738756.1728733913&semt=ais_hybrid/300x200',
      description: (
        <p>
          Cet article explique comment utiliser Git pour gérer les versions d'un projet de développement, et comment héberger un code pour une collaboration efficace.
        </p>
      ),
      link: 'https://docs.github.com/fr/get-started/start-your-journey/about-github-and-git#%C3%A0-propos-de-github',
    },
    {
      title: 'Design Responsive : Créer des sites adaptés à tous les appareils',
      date: '10 décembre 2023',
      image: 'https://img.freepik.com/free-photo/responsive-design-layout-software-concept_53876-124325.jpg?ga=GA1.2.390738756.1728733913&semt=ais_hybrid/300x200',
      description: (
        <p>
          Maîtrisez le responsive design pour adapter vos sites à tous types d’écrans.
        </p>
      ),
      link: 'https://blog.hubspot.fr/website/site-responsive-design',
    },
    {
      title: 'Introduction aux API : Qu’est-ce que c’est et comment les utiliser',
      date: '06 février 2024',
      image: 'https://img.freepik.com/free-vector/gradient-api-illustration_23-2149379181.jpg?ga=GA1.2.390738756.1728733913&semt=ais_hybrid/300x200',
      description: (
        <p>
          Cet article définit ce qu'est une API, et comment elle permet aux applications web de communiquer avec des services externes.
        </p>
      ),
      link: 'https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Introduction',
    },
    {
      title: 'Déployer votre premier site web : Un guide pour débutant',
      date: '12 avril 2024',
      image: 'https://img.freepik.com/premium-vector/guides-icon-vector-image-can-be-used-printing_120816-393473.jpg?ga=GA1.2.390738756.1728733913&semt=ais_hybrid/300x200',
      description: (
        <p>
          Cet article guide les débutants dans le processus de mise en ligne de leur premier site web. Il présente plusieurs plateformes d'hébergement.
        </p>
      ),
      link: 'https://www.frederiqueassael.fr/creer-son-premier-site-web-professionnel-comment-sy-prendre/',
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">BLOG</h1>
      <p>Retrouvez ici quelques articles sur le développement web.</p>
      <div className="card-container">
        {articles.map((article, index) => (
          <Card key={index} style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={article.image} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.description}</Card.Text>
              <Button variant="primary" href={article.link} target="_blank" rel="noopener noreferrer">
                Lire la suite
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              Publié le {article.date}
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
