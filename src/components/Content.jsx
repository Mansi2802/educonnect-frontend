import pic1 from "../img/discuss1.jpg"
import pic2 from "../img/discuss2.jpg"
import pic3 from "../img/events3.jpg"
import pic4 from "../img/events2.jpg"
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
                heading="Assignment Submission"
                text1="An assignment submission portal tailored for college students streamlines the process of academic task management. 
                It's a digital lifeline, simplifying the often complex journey of submitting assignments, papers, and projects.
                 This portal offers students a clear and organized platform where deadlines, instructions, and submission requirements are readily accessible.
                  It promotes efficiency, reducing the risk of missed deadlines 
                and ensuring that students can focus on their coursework rather than the logistics of submission."
                
                text2="Additionally, it provides instructors with a centralized platform for evaluating and providing feedback, enhancing the 
                learning experience. In the ever-evolving landscape of higher education, an assignment submission portal becomes an indispensable tool,
                 easing the administrative burdens and allowing students to channel their energies into the pursuit of knowledge and personal growth."
                img1={pic5}
                img2={pic6}
                />
            </div>
        </>
    )
}
export default Content;