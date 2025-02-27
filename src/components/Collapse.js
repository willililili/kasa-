import React, { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse-title" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <svg
          className={`arrow ${isOpen ? "rotate" : ""}`}
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M7.41 15.41 12 10.83l4.59 4.58L18 15l-6-6-6 6z"></path>
        </svg>
      </div>

      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;
