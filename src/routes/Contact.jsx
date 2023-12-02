import React from 'react';
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Contacts from '../components/Contact';
import Footer from "../components/Footer";
import { useLocation,useNavigate } from "react-router-dom";

function Contact() {
    const location = useLocation();
    const state = location.state;
    return(
        <>
        <Navbar email = {state?state.id: " "}/>
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