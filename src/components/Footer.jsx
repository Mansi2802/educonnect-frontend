import "./Footer.css";
import React from "react";
import footerpic from "../img/pic6.jpeg"
function footer() {
    return (
        <>
        <div className="footer">
            <div className="top">
                <div>
                    <h1>EDUCONNECT</h1>
                </div>
            </div>
            <div className="footer-content">
                <div className="bottom">
                    <div>
                        <h4>CATEGORY</h4>
                        <a href="/">Home</a>
                        <a href="/">About us</a>
                        <a href="/">Programs</a>
                        <a href="/">Contact</a>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h4>SUPPORT</h4>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Refund & Cancellation Policy</a>
                        <a href="/">Terms and Conditions</a>
                        <a href="/">Report Problem</a>
                    </div>

                </div>
                <img src={footerpic} class="logo" alt=""></img>
            </div>
            <p class="footer-title">about us</p>
            <p class="info">To report any issue or query, you can call or email us</p>
            <p class="info">support emails - help@cgifting.com, customersupport@gifting.com</p>
            <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">Privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">Instagram</a>
                    <a href="#" class="social-link">Facebook</a>
                    <a href="#" class="social-link">Twitter</a>
                </div>
            </div>
        </div>
        <div>
            <p class="footer-credit">Copyright © 2023 All Right Reserved.</p>
        </div>
         </>
    );
}
export default footer;