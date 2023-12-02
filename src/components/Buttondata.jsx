import React from 'react';
import { useState } from "react";
import Card from "../components/Card";

function ButtonData(props)
{
   
    const[btnState,setBtnState]=useState(false);

    function handleClick(){
        setBtnState(btnState=>!btnState);
    }
    let toggleClassCheck = btnState ? 'active':null;
    return(
        <>
            <center>
            <button className={`btn ${toggleClassCheck} eve-reg-btn`} onClick={handleClick}>
            {props.heading}</button>
            <div className='bar'>
                {
                    toggleClassCheck?<Card/>:null
                }
            </div>
            </center>
        </> 
    )
}
export default ButtonData;