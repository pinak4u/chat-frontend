import React,{useState} from 'react'

function SendMessageComponent(props) {
    const [message, setmessage] = useState('');
    const sendMessage = () =>{
        props.sendMessage(message);
        setmessage('');
    }
    return (
        <div>
            <input onChange={(event)=>setmessage(event.target.value)} value = {message}/>
             <button onClick={()=>{sendMessage()}}>Send Message</button>   
        </div>
    )
}

export default SendMessageComponent
