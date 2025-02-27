import React from "react";
import logements from "../data/logements.json";
import { useNavigate } from "react-router-dom";
import "./Cards.scss";

const Cards = () => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
        navigate(`/FicheLogement/${id}`);
  };

  return (
    <div className="gallery">
      {logements.map((logement) => (
        <div 
          key={logement.id} 
          className="card"
          onClick={() => handleCardClick(logement.id)}
          style={{ cursor: "pointer"}}
        >
          <img src={logement.cover} alt={logement.title} className="card-image" />
          <h3 className="card-title">{logement.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cards;