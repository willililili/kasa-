import React from "react";
import "./NotFound.scss";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="back-to-home">Retourner à la page d'accueil</NavLink>
        </div>
    );
};

export default NotFound;