import React from 'react';
import Programdata from "./ProgramData";
import "./Programs.css"
import pic1 from "../img/discuss.jpeg"
import pic2 from "../img/event.jpeg"
import pic3 from "../img/assignment.jpeg"
import pic4 from "../img/assignment.jpeg"
// import pic4 from "../img/pic_donate.jpg"

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
            
            />
            <Programdata
            image={pic2}
            heading="Events"
            text="A platform for students to discover, discuss and coordinate various events and activities "
            
            />
            <Programdata
            image={pic3}
            heading="Assignment Submission"
            text="A platform enabling students to submit academic assignments and for teachers to receive, review and grade them "
            
            />
             {/* <Programdata
            image={pic4}
            heading="Coding"
            text="A coding practice portal is an online platform or website designed to help programmers and developers 
            enhance their coding skills, problem-solving abilities, and programming knowledge. "
            
            />  */}
            </div>
        </div>
    );
}
export default Programs;