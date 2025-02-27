import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import './Layout.scss';
import logo from "../images/logo-kasa.png";
import logoWhite from "../images/logo-kasa-white.png";

const Layout = () => {
    return (
        <div className="layout">
            <header>
                <div className="header-content">
                    <img src={logo} alt="Logo" />
                    <nav>
                        <ul>
                            <li><NavLink to="/">Accueil</NavLink></li>
                            <li><NavLink to="/Apropos" >À propos</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <img src={logoWhite} alt="Logo en blanc" />
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    );
};

export default Layout;