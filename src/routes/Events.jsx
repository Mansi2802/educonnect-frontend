import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import pic from "../img/pic5.jpeg";
import Eventcards from "../components/Eventcards";
import Programs from "../components/Programs";
import Footer from "../components/Footer";
import React from 'react';
function Events() {
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroimg="https://www.jiit.ac.in/sites/default/files/default_images/about-jiit_5.jpg"
        />
        {/* <Programs/> */}
        <Eventcards/>
        <Footer/>
        </>
    )
}
export default Events;