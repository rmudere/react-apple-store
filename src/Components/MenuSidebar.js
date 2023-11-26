import React from "react";
import "../Styles/MenuSidebar.css";
import image1 from "../Images/Type=Transparent.png";
import image2 from "../Images/Name=menu.png";
import image3 from "../Images/Name=storefront.png";
import image4 from "../Images/Name=bag-handle.png"
import image5 from "../Images/Name=log-out.png";

export default function MenuSidebar() {
    return (
        <div className="menu-container">
            <div className="menu-sidebar">
                <img src={image1} alt="logo" />
            </div>
            <div className="menu-sidebar">
                <img src={image2} alt="menu" />
            </div>
            <div className="menu-sidebar">
                <img src={image3} alt="storefront" />
            </div>
            <div className="menu-sidebar">
                <img src={image4} alt="bag-handle" />
            </div>
            <div className="menu-sidebar">
                <img src={image5} alt="log-out" />
            </div>
        </div>
    )
}