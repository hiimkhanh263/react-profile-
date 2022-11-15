import React from "react";
import "./BodyContact.css";

function BodyContact () {
    return (
        <div className="contact-form">
            <div className="body-contact">
                <div className="contact-img">
                    <img src={require('../../assets/images/avt4.jpg')} alt="Bodycontact"/>
                </div>
                <div className="contact-content">
                    <h1>Contact me</h1>
                    <p>Let chatting with me</p>
                </div>
            </div>

            <form>
                <label>Your Name</label>
                <input type="text"></input>

                <label>Email</label>
                <input type="email"></input>

                <label>Phone</label>
                <input type="text"></input>

                <label>Message</label>
                <textarea rows="6" placeholder="Type your message" />

                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default BodyContact