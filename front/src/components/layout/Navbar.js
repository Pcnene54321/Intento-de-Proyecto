import React, { useState } from "react";
import "./Stylescomponents/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <span className="nav-logo">Viajero</span>
            <div className="nav-items">
                <a href="/Inicio">Inicio</a>
                <a href="/Nosotros">Nosotros</a>
                <a href="/Novedades">Novedades</a>
                <a href="/Contacto">Contacto</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>

    );
};

export default Navbar;