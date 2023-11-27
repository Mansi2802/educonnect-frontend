import React from 'react';
import "./Hero.css";

function Hero(props){
    return(
        <>
        <div className={props.cName}>
            <img alt="heroimg" src={props.heroimg} />
            <div className="hero-text">
                <h1>Welcome to EduConnect</h1>
                <p>JIIT's platform providing most advanced facilities to help students attain academic & career goals</p>
                <a href="/">
                    Travel Plan
                </a>
            </div>
        </div>
        </>
    )
}
export default Hero;