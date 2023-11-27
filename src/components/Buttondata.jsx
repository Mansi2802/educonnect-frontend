import React from 'react';
import { useState } from "react";


function ButtonData(props)
{
   
    const[btnState,setBtnState]=useState(false);

    function handleClick(){
        setBtnState(btnState=>!btnState);
    }
    let toggleClassCheck = btnState ? 'active':null;
    return(
        <>
            <button className={`btn ${toggleClassCheck}`} onClick={handleClick}>
            {props.heading}</button>
        </> 
    )
}
export default ButtonData;