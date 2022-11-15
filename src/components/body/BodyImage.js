import "./BodyImage.css";
import React from "react";

import { Link } from "react-router-dom";


function BodyHomeImage () {
    return (
        <div className="bodyimage">
            <div className="body-img">
                <img src={require('../../assets/images/body-img.jpg')} alt="BodyImg"/>
            </div>
            <div className="content">
                <p>Hello, I am</p>
                <h1>Lưu Quốc Khánh</h1>
                <div>
                    <Link to="/about" className="btn ">ABOUT ME</Link>
                    <Link to="/education" className="btn ">education</Link>
                    <Link to="/contact" className="btn ">CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default BodyHomeImage