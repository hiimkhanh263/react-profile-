import "./BodyEducation.css";
import React from "react";

function BodyEducation () {
    return (
        <div className="body-education">
            <div className="education-img">
                <img src={require('../../assets/images/utt2.jpg')} alt="Bodyeducation"/>
            </div>
            <div className="education-content">
                <h1>Education n Experience</h1>
                    <p>2018-2022: Study at University Of Transport Technology</p>
                    <p>2018-2020: Part-time employee at KFC</p>
                    <p>2020-2021: Marketing Ads part-time</p>
                    <p>2011-2022: Part-time employee at bookshop</p>
                    
            </div>

        </div>
    )
}

export default BodyEducation