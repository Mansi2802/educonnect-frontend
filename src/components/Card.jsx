import React from 'react';
import "./cards.css"
import CardData from './CardData';
import pic1 from "../img/ques.jpg"
import pic2 from "../img/assignment.jpeg"

function Cards()
{
    return(
        <div className="card">
            <div className="cardcard">
            <CardData
            image={pic1}
            heading="Questions"
            link="https://leetcode.com/problemset/all/"
            />
            <CardData
            image={pic2}
            heading="Assignments"
            link="/assignments"
            />
            </div>
        </div>
    );
}
export default Cards;