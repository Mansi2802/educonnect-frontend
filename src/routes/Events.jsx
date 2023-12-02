import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Eventcards from "../components/Eventcards";
import Footer from "../components/Footer";
import React from 'react';
import { useLocation} from "react-router-dom";

function Events() {
    const location = useLocation();
    const state = location.state;
    return(
        <>
        <Navbar email = {state?state.id: " "}/>
        <Hero
        cName="hero"
        heroimg="https://www.jiit.ac.in/sites/default/files/default_images/about-jiit_5.jpg"
        />
        <Eventcards/>
        <Footer/>
        </>
    )
}
export default Events;