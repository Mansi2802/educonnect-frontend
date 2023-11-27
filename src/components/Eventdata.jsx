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
                    </div>
                    <div className="temp_image">
                        <img src={props.image2} alt="image" />
                    </div>
                    <div className="temp_image">
                        <img src={props.image3} alt="image" />
                    </div>
                    <div className="temp_image">
                        <img src={props.image4} alt="image" />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Eventdata;