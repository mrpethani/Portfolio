import { useState } from 'react';
import './Contact.scss';
import axios from 'axios';

const Contact = () => {
    const [msg, setMsg] = useState(false);
    const [nameValue,setNameValue] = useState("");
    const [mobileValue,setMobileValue] = useState("");
    const [emailValue,setEmailValue] = useState("");
    const [msgValue,setMsgValue] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const res = await axios.post("/sendmsg",{
                name:nameValue,
                mobile:mobileValue,
                email:emailValue,
                msg:msgValue
            })

            if(res.status === 200){
                setMsg(true);
            }else{
                alert("Soory, Your Msg sending has been failed");
            }

        }catch(e){
            alert("Soory, Your Msg sending has been failed");
        }
    }

    return (
        <div id="contact" className="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>
                    Contact Us
                </h2>
                <form method="POST" onSubmit={handleSubmit}>
                    <input required type="text" placeholder="Name"  value={nameValue} onChange={(e)=>setNameValue(e.target.value)}/>
                    <input required type="tel" placeholder="Mobile (10 Digits Only)" pattern="[0-9]{10}" value={mobileValue} onChange={(e)=>setMobileValue(e.target.value)}/>
                    <input required type="email" placeholder="Email"  value={emailValue} onChange={(e)=>setEmailValue(e.target.value)}/>
                    <textarea required placeholder="Message" value={msgValue} onChange={(e)=>setMsgValue(e.target.value)}></textarea>
                    <button type="submit">Send</button>
                    {
                        msg && (<span className="msgSent">
                            Thanks, I'll reply ASAP 😇 
                        </span>)
                    }
                </form>
            </div>
            <a href="#intro">
                <img src="assets/down.png" alt="" />
            </a>
        </div>
    )
}

export default Contact;