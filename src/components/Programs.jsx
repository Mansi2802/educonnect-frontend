import React from 'react';
import Programdata from "./ProgramData";
import "./Programs.css"
import pic1 from "../img/discuss.jpeg"
import pic2 from "../img/event.jpeg"
import pic3 from "../img/dsa2.jpg"

function Programs()
{
    return(
        <div className="program ">
            
            <h1>Our Services</h1>
            <div className="programcard">
            <Programdata
            image={pic1}
            heading="Discussion Forum"
            text="A platform for students to engage in conversations, share opinions, and discuss various topics of interest "
            link="/discussions"
            />
            <Programdata
            image={pic2}
            heading="Events"
            text="A platform for students to discover, discuss and coordinate various events and activities "
            link="/events"
            />
            <Programdata
            image={pic3}
            heading="DSA Practice"
            text="A platform where students can practice dsa questions and submit assignments for evaluating their skills "
            link="/coding"
            />
            </div>
        </div>
    );
}
export default Programs;