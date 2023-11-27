import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import React from 'react';
import Footer from "../components/Footer";
function Discussions() {
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroimg="https://www.jiit.ac.in/sites/default/files/contact-us_0.jpg"
        />
        <Footer/>
        </>
    )
}
export default Discussions;