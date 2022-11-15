import "./BodyAbout.css";
import React from "react";

function BodyAbout () {
    return (
        <div className="body-about">
            <div className="about-img">
                <img src={require('../../assets/images/avt3.jpg')} alt="Bodyabout"/>
            </div>
            <div className="about-content">
                <h1>About me</h1>
                    <p>Hi, I am Khanh. I am glad this opportunity to introduce myself. I am 22. I live in Hanoi. 
                        I study at University Of Transport Technology, 
                        My major is Information System. 
                        I want to be a react front-end developer. I like sport, music...
                        </p>
                    <p>Thank for reading.</p>
                    
            </div>
        </div>
    )
}

export default BodyAbout