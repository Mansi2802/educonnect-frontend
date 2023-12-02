import React,{useState} from "react";
import { MenuItems } from "./MenuItems";
import "./navbar.css";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar=({email})=>{
    const [showMediaIcons,setMediaIcons]=useState(false);
    return(
        <>
        <nav className="main-nav">
            <div  className="logo">
                <h2>
                    <span>E</span>du
                    
                    <span>C</span>onnect
                </h2>
                <h3>
                    {"Welcome  - " + email}
                </h3>
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
            
        </nav>
            
        </>
    );
}
export default Navbar;