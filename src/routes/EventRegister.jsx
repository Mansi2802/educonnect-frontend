import React, { useEffect, useState } from "react";
import "./EventRegister.css";


function EventRegister(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[event,setEvent]=useState('');
    const[flag,setFlag]=useState(false);
    useEffect(()=>{
        console.log("Registered")
    },[flag])
    async function submit(e) {
        e.preventDefault();
        if(!name ||!email || !phone || !event){
            alert("All fields are mandatory")
        }
        else{
            setFlag(true)
        }
        try {

        const response = await fetch ('http://localhost:5000/EventRegister',{
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name,email,phone,event})
        });
            const data = await response.json();
            console.log(data);

        } 
        catch (e) {
          alert("Error occurred"+e.message);
          console.log(e);
        }
      }
            
    return(
        <>
        <pre>{(flag)?<h2 className="ui-define">
        You've Registered Successfully</h2>:""}</pre>
            <form action="" className="container" onSubmit={submit}>
                <div className="header">
                    <h1>HACKATHON Registration form</h1>
                </div>
                <div className="form">
                    <input type="text" name="name" id="name" 
                    // value={inputData.name}
                    placeholder="Enter Your Name" onChange={(e)=>{setName(e.target.value)}}
                    // onChange={handleData}
                    />
                    <input type="text" name="email" id="email" 
                    // value={inputData.email} 
                    placeholder="Enter Your Email Id" onChange={(e)=>{setEmail(e.target.value)}}
                    // onChange={handleData}
                    />
                    <input type="text" name="phone" id="phone" 
                    // value={inputData.phone} 
                    placeholder="Enter Your Phone number" onChange={(e)=>{setPhone(e.target.value)}}
                    // onChange={handleData}
                    />

                    <select name="events" id="events" onChange={(e)=>{setEvent(e.target.value)}}
                    // value={inputData.events} onChange={handleData}
                    >
                        <option value="Code of Duty">Code of Duty</option>
                        <option value="Xenith">Xenith</option>
                        <option value="HackStreet">Hackstreet</option>
                        <option value="Techblocks 9.1">Techblocks 9.1</option>
                    </select>
                    {/* <select name="events" id="events" value={myEvent} onChange={handleChange}>
                        <option value="HACKATHON">Code of Duty</option>
                        <option value="HACKATHON">Xenith</option>
                        <option value="HACKATHON">Hackstreet</option>
                        <option value="HACKATHON">Techblocks 9.1</option>
                    </select> */}
                    <br/>
                    <button type="submit" className="eve-reg-btn" onClick={submit}>Submit</button>
                </div>
            </form>
        </>
    )
}
export default EventRegister