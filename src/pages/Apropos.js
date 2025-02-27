import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aproposData from "../data/apropos.json";
import "./Apropos.scss"


const Apropos = () => {
    return (
        <div className="a-propos">
            <Banner page="a-propos" text=""/>
            <div className="collapses">
                {aproposData.map((item, index) => (
                    <Collapse key={index} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
    );
};

export default Apropos;
