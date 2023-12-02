import "./cards.css"
import React from 'react';
function CardData(props)
{
    return(
        <div className="cardcard">
        <div className="ti-card">
            <div className="ti-image">
                <a href={props.link}>
                    <img src={props.image} alt="image"/>
                </a>
                <h2>{props.heading}</h2>
            </div>
        </div>
        </div>
    )
}
export default CardData;