import React from 'react';
import erreur404 from "../assets/404.png"
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='error'>
            <img src={erreur404} alt="Erreur 404"  />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default ErrorPage;