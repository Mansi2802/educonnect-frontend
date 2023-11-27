import React from 'react';
import { useState } from "react";
import axios from "axios";
function Fileuploader()
{
    const [ files, setFiles]=useState(null);
    const [ progress, setProgress]=useState({started:false,pc:0});
    const [ msg, setMsg]=useState(null);
    function handleUpload(){
        if(!files)
        {
            setMsg("No file selected");
            return;
        }
        const fd=new FormData();
        for(let i=0;i<files.length;i++)
        {
            fd.append('file$(i+1)',files[i]);
        }
        //we can use fetch method as its a post method
        // but progress bar will not show then

        
        //fd.append('file',file);       //to upload single file        
        setMsg("Uploading...");
        setProgress(prevState=>{
            return{...prevState,started:true}
        })
        axios.post('https://httpbin.org/post',fd,{
            onUploadProgress:(progressEvent)=>{setProgress(prevState=>{
                return{...prevState,pc:progressEvent.progress*100}
            })
        },
            headers:{
                "Custom-Header":"value",
            }
        })
        .then(res=>{
            setMsg("Upload successful");
            console.log(res.data);
        })
        .catch(err=>{
            setMsg("Upload failed");
            console.error(err)
        });
    }
    return(
        <>  
        <div className="form-container">
                <h1>Submit Assignnment - "DSA-Arrays"</h1>
                <form>
                    <input placeholder="Name"/>
                    <input placeholder="RollNo."/>
                    {/* <textarea placeholder="Message" name="message" id="message" rows="2"></textarea> */}
                    {/* <button>Send Message</button> */}
                    <input onChange={(e)=>{setFiles(e.target.files)}} type="file" multiple/>
            <button onClick={handleUpload}>Upload</button>
            {progress.started && <progress max="100" value={progress.pc}></progress>}
            {msg && <span>{msg}</span>}
                </form>
            </div> 
            {/* <h1>Upload Your Assignments</h1>
            <h2>Assignment-1</h2> */}
            
        </>
    )
}
export default Fileuploader;