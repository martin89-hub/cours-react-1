import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <div className="container contact-page">
            
            <div className="row contact-form-container">
                <h1 className="text-center contact-title">Me Contacter</h1>
                <p className="text-center contact-intro">
                   Pour me contacter pour un entretien ou une future collaboration, veuillez remplir le formulaire ci-dessous.
                </p>

                <div className="col-md-6 contact-form-section">
                    <h2>Formulaire de Contact</h2>
                    <hr className="title-separator" />
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="name" placeholder="Votre nom" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Adresse Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Votre adresse email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Numéro de Téléphone</label>
                            <input type="tel" className="form-control" id="phone" placeholder="Votre numéro de téléphone" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Sujet</label>
                            <input type="text" className="form-control" id="subject" placeholder="Sujet" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Votre message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </form>
                </div>

                <div className="col-md-6 contact-details-section">
                    <h2>Mes Coordonnées</h2>
                    <hr className="title-separator" />
                    <p>
                        Bourgogne-Franche-Comté, 71600 Paray-Le-Monial, France<br />
                        Téléphone : 07 79 87 25 36
                    </p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.368556079981!2d4.1155381157665325!3d46.45197817912524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f295137f3b199b%3A0xa97b8fa9a73a6e96!2sParay-le-Monial%2C%2071600%20France!5e0!3m2!1sfr!2sfr!4v1697049000000!5m2!1sfr!2sfr"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
