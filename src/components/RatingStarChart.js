import React from "react";
import './RatingStarChart.scss';
import starFilled from '../images/star-red.png';
import starEmpty from '../images/star-grey.png';

const RatingStarChart = ({ rating }) => {
    return (
        <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
                <img
                    key={i}
                    src={i < rating ? starFilled : starEmpty} 
                    alt={i < rating ? "Étoile remplie" : "Étoile vide"}
                    className="star"
                />
            ))}
        </div>
    );
};

export default RatingStarChart;