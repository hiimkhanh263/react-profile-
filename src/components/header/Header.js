import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header () {
    return (
        <div className="header">
            <Link to="/">
                <h1>PROFILE</h1>
            </Link>
            <ul className="header-menu">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/education">EDUCATION</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header