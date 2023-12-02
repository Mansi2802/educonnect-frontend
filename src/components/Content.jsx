import pic1 from "../img/discuss1.jpg"
import pic2 from "../img/discuss2.jpg"
import pic3 from "../img/events3.jpg"
import pic4 from "../img/events1.jpg"
import pic5 from "../img/assignment1.jpeg"
import pic6 from "../img/assignment3.jpeg"
import "./Content.css";
import React from "react"
import Contentdata from "./ContentData"

const Content = () => {
    return (
        <>
            <div className="content">
                <h1>Let's bring academics closer to you!</h1>
                <Contentdata
                className="first-des"
                heading="Discussion Forum"
                text1="A discussion forum tailored for college students serves as a dynamic hub for intellectual exchange, collaboration, 
                and community building. Within this virtual space, students from diverse backgrounds converge to engage in academic discourse, share knowledge, and seek peer support. It's a vibrant ecosystem
                 where the complexities of coursework are unraveled, ideas find fertile ground, and lifelong friendships often take root."
                
                text2="Whether students seek assistance with challenging assignments, explore their passions beyond the classroom,
                 or simply share their experiences and aspirations, this forum stands as a digital agora of ideas and camaraderie. It fosters an environment
                 where the pursuit of knowledge is a collective journey, and where the vibrancy of campus life extends seamlessly into the virtual realm."
                img1={pic1}
                img2={pic2}
                />
                <Contentdata
                className="first-des-reverse"
                heading="Events"
                text1="An events portal designed for college students serves as a dynamic gateway to a vibrant campus experience.
                 It's a digital compass that guides students through the myriad of opportunities available in their academic journey.
                  Whether it's highlighting upcoming lectures, workshops, club meetings, or social gatherings, this portal keeps students informed, engaged, and connected.
                 It becomes a central hub where curiosity meets exploration, fostering a sense of community and camaraderie."
                text2="It doesn't just list events; it weaves them into the fabric of campus life, ensuring that students not only 
                attend but actively participate in the diverse tapestry of activities that define their college experience. In this virtual realm,
                 students can discover their passions, forge lasting friendships, 
                and create memories that will resonate long after they've left the hallowed halls of their alma mater."
                img1={pic3}
                img2={pic4}
                />
                <Contentdata
                className="first-des"
                heading="Practice DSA Ques & Submit Assignments"
                text1="Introducing a dynamic online learning platform tailored to empower students in mastering Data Structures and Algorithms (DSA).
                 This innovative platform provides a comprehensive space for students to practice a wide array of DSA questions and submit assignments seamlessly.
                  With an extensive repository of curated problems spanning various difficulty levels, students can enhance their problem-solving skills and algorithmic thinking. 
                  The platform incorporates real-time evaluation features, offering instant feedback to help students gauge their proficiency and identify areas for improvement. "
                
                text2="Additionally, interactive discussions and collaborative forums foster a vibrant community where students can learn from each other and seek assistance when needed.
                The platform's user-friendly interface ensures a smooth learning experience, making it an invaluable resource for students striving to excel in DSA and elevate their programming capabilities."
                img1={pic5}
                img2={pic6}
                />
            </div>
        </>
    )
}
export default Content;