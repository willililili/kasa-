import React, { useState } from "react";
import "./GalleryLogementPictures.scss";

const GalleryLogementPictures = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPictures = pictures.length;
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPictures);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPictures) % totalPictures);
    };

    return (
        <div className="gallery-container">
            
            <img 
                src={pictures[currentIndex]} 
                alt={`Illustration ${currentIndex + 1}`} 
                className="gallery-image" 
            />

            {totalPictures >1 && (
                <> {/*fragment  - regroupe plusieurs éléments sans ajouter d'html supplémentaire*/}
                    <button className="arrow left" onClick={handlePrev}>
                        <svg
                            className="arrow-icon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                        <path d="M15.41 7.41 10.83 12l4.58 4.59L14 18l-6-6 6-6z"></path>                </svg>
                    </button>

                    <button className="arrow right" onClick={handleNext}>
                        <svg
                            className="arrow-icon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path>
                        </svg>
                    </button>

                    <div className="image-counter">
                        {currentIndex + 1}/{totalPictures}
                    </div>
                </>
            )}
        </div>
    );
};

export default GalleryLogementPictures;