import React from "react";
import { useState } from "react";
import Buttondata from './Buttondata';

const Button = () => {
    return(
        <>
            <Buttondata heading="Arrays"/>
            <Buttondata heading="Linked list"/>
            <Buttondata heading="Strings"/>
            <Buttondata heading="Trees"/>
            <Buttondata heading="Graphs"/>
            <Buttondata heading="Stack"/>
            <Buttondata heading="Queue"/>
            <Buttondata heading="DP"/>
        </> 
    )
}
export default Button;