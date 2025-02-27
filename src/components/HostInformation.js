import React from "react";
import "./HostInformation.scss";

const HostInformation = ({ host }) => {
    return (
        <div className="host-info">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} className="host-picture" />
        </div>
    );
};

export default HostInformation;