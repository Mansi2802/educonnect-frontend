import "./Eventcards.css"
import React from 'react';
function EventData2(props) {
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="program_c">
                <div className="temp_card">
                    <div className="temp_image">
                        <img src={props.image1} alt="image" />
                        <div className="hack-head">
                            <h2>{props.name1}</h2>
                            <br />
                            <a href="http://localhost:3000/EventRegister">
                                <button>Register Now</button>
                            </a>
                        </div>

                    </div>
                    <div className="temp_image">
                    <img src={props.image2} alt="image" />
                        <div className="hack-head">
                            <h2>{props.name2}</h2>
                            <br />
                            <a href="http://localhost:3000/EventRegister">
                                <button>Register Now</button>
                            </a>
                        </div>
                    </div>

                    <div className="temp_image">
                    <img src={props.image3} alt="image" />
                        <div className="hack-head">
                            <h2>{props.name3}</h2>
                            <br />
                            <a href="http://localhost:3000/EventRegister">
                                <button>Register Now</button>
                            </a>
                        </div>
                    </div>


                    <div className="temp_image">
                    <img src={props.image4} alt="image" />
                        <div className="hack-head">
                            <h2>{props.name4}</h2>
                            <br />
                            <a href="http://localhost:3000/EventRegister">
                                <button>Register Now</button>
                            </a>
                        </div>
                    </div>

                </div >

            </div >
        </>
    )
}
export default EventData2;