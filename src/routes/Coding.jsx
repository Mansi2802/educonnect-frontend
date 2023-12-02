import React from 'react';
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CodingPractice from '../components/CodingPractice';
import { useLocation,useNavigate } from "react-router-dom";

function Coding() {
    const location = useLocation();
    const state = location.state;
    return(
        <>
        <Navbar email = {state?state.id: " "}/>
        <Hero
        cName="hero"
        heroimg="https://www.jiit.ac.in/sites/default/files/home-banner.jpg"
        />
        <h1>Lets code</h1>
        <CodingPractice/>
        <Footer/>
        </>
    )
}
export default Coding;