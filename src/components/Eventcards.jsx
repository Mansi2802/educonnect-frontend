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
import EventData2 from "./EventData2";
function Eventcards() {
    return (
        <>
            <Eventdata
            heading="Our Fests"
            image1={pic1}
            name1="Impressions"
            p1="Date: 10th december"
            p2="Venue: OAT"
            p3="Time: 12pm"
            image2={pic2}
            name2="Converge"
            q1="Date: 12th december"
            q2="Venue: OAT"
            q3="Time: 12pm"
            image3={pic3}
            name3="Ethnic Night"
            r1="Date: 25th november"
            r2="Venue: OAT"
            r3="Time: 5pm"
            image4={pic4}
            name4="Joust"
            s1="Date: 7th january"
            s2="Venue: Auditorium"
            s3="Time: 3pm"
            />
            <EventData2
            heading="Our Hackathons"
            image1={pic5}
            name1="HackStreet"
            image2={pic6}
            name2="Xenith"
            image3={pic7}
            name3="Code of Duty"
            image4={pic8}
            name4="Techblocks 9.1"
            />
            <Eventdata
            heading="Our Seminars"
            image1={pic9}
            p1="Date: 5th december"
            p2="Venue: Auditorium"
            p3="Time: 1pm"
            name1="Pre-Registration Event"
            image2={pic10}
            q1="Date: 12th december"
            q2="Venue: Auditorium"
            q3="Time: 4pm"
            name2="Biotech Conference"
            image3={pic11}
            r1="Date: 21th december"
            r2="Venue: Auditorium"
            r3="Time: 2pm"
            name3="Placement Drives"
            image4={pic12}
            s1="Date: 1st january"
            s2="Venue: Auditorium"
            s3="Time: 10am"
            name4="Orientation"
            
            />
        </>
    )
}
export default Eventcards;