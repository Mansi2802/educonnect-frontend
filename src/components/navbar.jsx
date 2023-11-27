import React,{useState} from "react";
// import {FaFacebookSquare,FaYoutubeSquare,FaInstagramSquare} 
// from "react-icons/fa";
import { MenuItems } from "./MenuItems";
// import {GiHamburgerMenu} from "react-icons/gi";
// import { FaHome,FaInfo,FaBriefcase,FaAddressBook } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";



import { Component } from "react";
import "./navbar.css";
/*
class Navbar extends Component {
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        <h1>Your Code Here</h1>
      </nav>
    );
  }
}

export default Navbar;


*/

const Navbar=()=>{
    const [showMediaIcons,setMediaIcons]=useState(false);
    return(
        <>
        <nav className="main-nav">
            <div  className="logo">
                <h2>
                    <span>E</span>du
                    
                    <span>C</span>onnect
                </h2>
            </div>
            <div className={showMediaIcons? "menu-link mobile-menu-link" : "menu-link" }>
                <ul>
                    {MenuItems.map((item,index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}>
                                    </i>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {/* <div className="social-media">
                <ul className="social-media-desktop">
                    <li><a href="#" target="_new"><FaFacebookSquare className="facebook"/></a></li>
                    <li><a href="#" target="_new"><FaInstagramSquare className="instagram"/></a></li>
                    <li><a href="#" target="_new"><FaYoutubeSquare className="youtube" /></a></li>
                </ul>
                <div className="hamburger-menu">
                    <a href="#" onClick={()=>setMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu/>
                    </a>
                </div>
            </div> */}
        </nav>
            {/*hero section 
            <section className="hero-section">
                <p>Welcome to </p>
                <h1>Vrindavan Travels</h1>
                </section>*/}
        </>
    );
}
export default Navbar;