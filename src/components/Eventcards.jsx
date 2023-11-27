import React from "react"
import './Eventcards.css';
import pic1 from "../img/events1.jpg";
import pic2 from "../img/events4.jpg";
import pic3 from "../img/events7.jpg";
import pic4 from "../img/events9.webp";
import pic5 from "../img/events2.jpg";
import pic6 from "../img/events8.png";
import pic7 from "../img/events8.jfif";
import pic8 from "../img/events10.jfif";
import pic9 from "../img/events3.jpg";
import pic10 from "../img/events11.jfif";
import pic11 from "../img/events12.jpg";
import pic12 from "../img/events9.jfif";
import Eventdata from "./Eventdata";
function Eventcards() {
    return (
        <>
            <Eventdata
            heading="Our Fests"
            image1={pic1}
            image2={pic2}
            image3={pic3}
            image4={pic4}
            />
            <Eventdata
            heading="Our Hackathons"
            image1={pic5}
            image2={pic6}
            image3={pic7}
            image4={pic8}
            />
            <Eventdata
            heading="Our Seminars"
            image1={pic9}
            image2={pic10}
            image3={pic11}
            image4={pic12}
            />
        </>
    )
}
export default Eventcards;