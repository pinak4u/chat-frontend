import React from 'react'

function ShowMessagesComponent(props) {
    return (
        <div>
            <ul>
            {props.messages.map((message)=>{
                return <li key={message.id} className={message.from_user == props.loggedInUser ? 'from_messages':'to_messages'}>{message.message}</li> 
                })} 
            </ul>
        </div>
    )
}

export default ShowMessagesComponent
