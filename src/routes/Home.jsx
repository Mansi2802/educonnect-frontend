import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Programs from "../components/Programs";
import Content from "../components/Content";
import Slider from "../components/Slider";
import React from 'react';
import { useLocation,useNavigate } from "react-router-dom";
function Home() {
    const location = useLocation();
    const state = location.state;
    return(
        <>
        <Navbar email = {state?state.id: " "} />
        <Slider/>
        {/* <Hero
        cName="hero"
        styleclass="maindiv"
        heroimg="https://www.jiit.ac.in/sites/default/files/home-banner-1.jpg"
        /> */}
        <Programs/>
        <Content/>
        <Footer/>
        </>
    )
}
export default Home;