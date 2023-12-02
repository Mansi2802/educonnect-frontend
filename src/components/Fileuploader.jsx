import React from 'react';
import { useEffect, useState } from "react";
import pic1 from "../img/dsa4.png";
import './FileUploader.css';
import { saveAs } from 'file-saver';

function Fileuploader(props) {
    const [progress, setProgress] = useState({ started: false, pc: 0 });
    const [msg, setMsg] = useState(null);
    const [Ano, setAno] = useState('');
    const [email, setEmail] = useState('');
    const [files, setFiles] = useState(null);
    const[flag,setFlag]=useState(false);
    useEffect(()=>{
        console.log("Registered")
    },[flag])

    // function handleUpload() {
    //     if (!files) {
    //         setMsg("No file selected");
    //         return;
    //     }
    //     const fd = new FormData();
    //     for (let i = 0; i < files.length; i++) {
    //         fd.append(`file${i + 1}`, files[i]);
    //     }

    //     setMsg("Uploading...");
    //     setProgress(prevState => {
    //         return { ...prevState, started: true }
    //     })

    //     axios.post('http://localhost:5000/Assignments', fd, {
    //         onUploadProgress: (progressEvent) => {
    //             setProgress(prevState => {
    //                 return { ...prevState, pc: progressEvent.progress * 100 }
    //             })
    //         },
    //         headers: {
    //             "Custom-Header": "value",
    //         }
    //     })
    //         .then(res => {
    //             setMsg("Upload successful");
    //             console.log(res.data);
    //         })
    //         .catch(err => {
    //             setMsg("Upload failed");
    //             console.error(err)
    //         });
    // }

    const downloadImg = () => {
        saveAs(pic1, 'dsa4.png');
    }

    async function submit(e) {
        e.preventDefault();

        try {
            const fd = new FormData();
            fd.append('Ano', Ano);
            fd.append('email', email);
            for (let i = 0; i < files.length; i++) {
                fd.append(`file${i + 1}`, files[i]);
            }

            const response = await fetch('http://localhost:5000/Assignments', {
                method: 'POST',
                body: fd,
            });

            const data = await response.json();
            console.log(data);
            setFlag(true);
        } 
        catch (e) {
            alert("Error occurred" + e.message);
            console.log(e);
        }
    }

    return (
        <>
        
            <div className="form-container">
                <h1>Submit Assignment</h1>
                <form className='form1'>
                    <button className='fileupload' onClick={downloadImg}>Download question</button>
                    <input className='fileupload' type="number" placeholder="Assignment NO." name="Ano" id='Ano' onChange={(e) => { setAno(e.target.value) }} />
                    <input className='fileupload' type="text" name="emailfile" id="email"
                    placeholder="Enter Your Email Id" 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <input className='fileupload' onChange={(e) => { setFiles(e.target.files) }} type="file" multiple />
                    {/* <button onClick={handleUpload}>Upload</button> */}
                    <button className='fileupload' onClick={submit}>Submit</button>
                    {progress.started && <progress max="100" value={progress.pc}></progress>}
                    {msg && <span>{msg}</span>}
                </form>
                <pre>{(flag)?<h2 className="ui-define">
        You've Submitted Assignment Successfully</h2>:""}</pre>
            </div>
        </>
    )
}

export default Fileuploader;