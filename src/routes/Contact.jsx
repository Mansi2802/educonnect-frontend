import React from 'react';
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Contacts from '../components/Contact';
import Footer from "../components/Footer";
function Contact() {
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroimg="https://www.jiit.ac.in/sites/default/files/home-banner.jpg"
        />
        <Contacts/>
        <Footer/>
        </>
    )
}
export default Contact;