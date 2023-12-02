import React, {useEffect,useState} from "react"
import axios from "axios"
import { useNavigate,Link } from "react-router-dom"
import "./EventRegister.css";

function Login(){
    const history=useNavigate()
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    async function submit(e) {
        e.preventDefault();
      
        try {
        const response = await fetch ('http://localhost:5000/login',{
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email,password})
        });
            const data = await response.json();
            console.log(data);

          if (data === "exist") {
            history("/", { state: { id: email } });
          } else if (data === "notexist") {
            alert("Invalid user details");
          }
        } catch (e) {
          alert("Error occurred"+e.message);
          console.log(e);
        }
      }

    return(
            <form action="POST" className="container">
            <div className="header">
                    <h1>Login</h1>
              </div>
              <div className="form">
                <input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email id"  />
                <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                <br />
                <input type="submit" className="eve-reg-btn" onClick={submit}/>
                </div>
            </form>
    )
}
export default Login;