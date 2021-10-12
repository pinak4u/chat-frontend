import React, { Component } from 'react'
import axios from 'axios'
import ShowMessagesComponent from './ShowMessagesComponent';
import SendMessageComponent from './SendMessageComponent';

export default class MessageComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages:[],
            selectedUser:2,
            loggedInUser : 1
        }
         
    }
    
    token =  '13|uhm4QZm7wHUMIrnJ18l3cs7P3Fack9vQnBiMJALY';
    componentDidMount(){
        let headers = {Authorization: `Bearer ${this.token}`} 
        axios.get(`http://chat.test/api/load-messages-for-users/${this.state.selectedUser}`,{headers})
        .then(response=>{
            let data = response.data;
            this.setState({messages:data});
        })
        axios.get(`http://chat.test/api/user`,{headers})
        .then(response=>{
            let data = response.data;
            this.setState({loggedInUser:data.id});
        })
    }

    handleMessageSend(message){
        let headers = {Authorization: `Bearer ${this.token}` } 
        axios({
            method:'POST',
            url:`http://chat.test/api/create-message/`,
            headers,
            data:{message,toUser:this.state.selectedUser}
        }).then(response=>{
            let data = response.data;
            this.setState({messages:[...this.state.messages,data]});
        }).catch(e=>console.log(e));

    }
    render() {
        return (
            <div>
                <SendMessageComponent sendMessage={(message)=>this.handleMessageSend(message)}/>
                <ShowMessagesComponent messages={this.state.messages} loggedInUser = {this.state.loggedInUser}/>
            </div>
        )
    }
}
