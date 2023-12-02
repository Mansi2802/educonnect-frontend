import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import React from 'react';
import Footer from "../components/Footer";
import { useLocation,useNavigate } from "react-router-dom";

function Discussions() {
    const location = useLocation();
    const state = location.state;
    return(
        <>
        <Navbar email = {state?state.id: " "}/>
        <Hero
        cName="hero"
        heroimg="https://www.jiit.ac.in/sites/default/files/contact-us_0.jpg"
        />
        <center>
            <h1>Only available on app</h1>
        </center>
        <Footer/>
        </>
    )
}
export default Discussions;