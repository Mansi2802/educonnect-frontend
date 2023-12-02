import "./Eventcards.css"
import React from 'react';
function Eventdata(props) {
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="program_c">
                <div className="temp_card">
                    <div className="temp_image">
                       <img src={props.image1} alt="image" />
                        <p>
                            <h2>{props.name1}</h2><br/>
                            {props.p1}<br/>
                            {props.p2}<br/>
                            {props.p3}
                        </p>
                    </div>
                    <div className="temp_image">
                    <img src={props.image2} alt="image" />
                        <p>
                            <h2>{props.name2}</h2><br/>
                            {props.q1}<br/>
                            {props.q2}<br/>
                            {props.q3}
                        </p>
                    </div>
                    <div className="temp_image">
                    <img src={props.image3} alt="image" />
                    <p>
                            <h2>{props.name3}</h2><br/>
                            {props.r1}<br/>
                            {props.r2}<br/>
                            {props.r3}
                        </p>
                    </div>
                    <div className="temp_image">
                    <img src={props.image4} alt="image" />
                    <p>
                            <h2>{props.name4}</h2><br/>
                            {props.s1}<br/>
                            {props.s2}<br/>
                            {props.s3}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Eventdata;