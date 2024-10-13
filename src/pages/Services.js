// src/components/Services.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartLine, faPalette } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';



const Services = () => {
    const services = [
        {
            title: 'Dynamiser un Espace de Commentaires.',
            icon: 'fas fa-laptop',
            description: "Création de formulaires fonctionnels. Utilisation des languages: HTML,CSS,JavaScript"
            
        },
        {
            title: 'Création de maquettes UI/UX.',
            icon: 'fas fa-code',
            description: "Création d maquettes pour des sites e-commerces, prototypage interactif , création pour application mobile/desktop .Technologie:Figma."
        },
        {
            title: 'Création d sites web basiques avec HTML/CSS',
            icon: 'fas fa-search',
            description: "Mise en place de site vitrine, ajout des sections d'informations,de formulaires de contact,personalisations de modèles HTML/CSS."
        }
    ];

    return (
        <div className="container services-page">
            

            <div className="row text-center">

                <h1 className="text-center services-title">MON OFFRE DE SERVICES</h1>
                <p className="text-center services-intro">
                   Voici les prestations sur lesquelles je peux intervenir.
                </p>



                {services.map((service, index) => (
                    <div className="col-md-4" key={index}>

                        <div className="service-card">
                            <i className={`${service.icon} service-icon`}></i>
                            <h5 className="service-title">{service.title}</h5>
                            <p className="service-description">{service.description}</p>
                            <FontAwesomeIcon icon={faLaptopCode}   size="3x" color="#007bff" /> 
                            
                        </div>
                        

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
