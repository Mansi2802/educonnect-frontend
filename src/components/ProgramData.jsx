import "./Programs.css"
import React from 'react';
function ProgramData(props)
{
    return(
        <div className="programcard">
        <div className="t-card">
            <div className="t-image">
                <a href={props.link}><img src={props.image} alt="image"/></a>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
        </div>
    )
}
export default ProgramData;