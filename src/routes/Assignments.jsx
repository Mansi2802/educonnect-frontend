import Fileuploader from "../components/Fileuploader";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import pic from "../img/pic2 (1).jpeg";
import "./Assignments.css";
import Footer from "../components/Footer";
import React from 'react';
import { useLocation,useNavigate } from "react-router-dom";

function Assignments() {
    const location = useLocation();
    const state = location.state;
    return(
        <>
        <Navbar email = {state?state.id: " "}/>
        <Hero
        cName="hero"
        heroimg="https://www.jiit.ac.in/sites/default/files/5_0.jpg"
        />
        <Fileuploader/>
        <Footer/>
        </>
    )
}
export default Assignments;