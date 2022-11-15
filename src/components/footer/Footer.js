import "./Footer.css";
import React from "react";

function Footer () {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-address">
                        <i class='bx bxs-home'></i>
                        <p>Thanh Tri - Ha Noi</p>
                    </div>
                    <div className="footer-phone">
                        <i class='bx bxs-phone' ></i>
                        <p>036 200 8697</p>
                    </div>
                    <div className="footer-mail">
                        <i class='bx bx-envelope' ></i>
                        <p>luuquockhanh2603@gmail.com</p>
                    </div>
                </div>

                <div className="footer-right">
                    <h4>Luu Quoc Khanh</h4>
                    <p>when you see my calling, xin em khong nhac may, lo nhu em co nghe roi thi cho anh xin not lan nay</p>
                    <div className="footer-social">
                        <i class='bx bxl-facebook-circle'></i>
                        <i class='bx bxl-instagram' ></i>
                        <i class='bx bxl-linkedin' ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer