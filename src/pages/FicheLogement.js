import React from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import GalleryLogementPictures from "../components/GalleryLogementPictures";
import RatingStarChart from "../components/RatingStarChart";
import HostInformation from "../components/HostInformation";
import Collapse from "../components/Collapse";
import Tags from "../components/TagsLogement";
import "./FicheLogement.scss";
import NotFound from "./NotFound";


const FicheLogement = () => {
    const { id } = useParams(); // hook de react-router-dom, récup id de l'url 
    const logement = logements.find(item => item.id === id); // parcoure le tbleau logement pr trouver l'item, dont l'id correspond à celui de lurl 

    if (!logement) {
        return <NotFound />;
    }

    return (
        <section className="logement-informations">
            
            <GalleryLogementPictures pictures={logement.pictures} />
            
            <div className="details-container">
                <div className="details-on-location">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <Tags tags={logement.tags} />
                </div>
                <div className="details-on-host">
                    <HostInformation host={logement.host} />
                    <RatingStarChart rating={logement.rating} />
                </div>
            </div>

            <div className="description-equipements-logement-details">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Équipements" content={
                        <ul>
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
            
        </section>
    );
};

export default FicheLogement;