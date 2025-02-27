import React from "react";
import './TagsLogement.scss';

const TagsList = ({ tags }) => {
    return (
        <div className="tags-logement">
            {tags.map((tag, index) => (
                <button key={index} className="tag">{tag}</button>
            ))}
        </div>
    );
};

export default TagsList;


