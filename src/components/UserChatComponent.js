import axios from 'axios';
import React, { Component } from 'react'
import UsersList from './UsersList';
export default class UserChatComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : [],
            selectedUser : 0
        };
        this.clickHandler = this.clickHandler.bind(this);    
    }
    clickHandler(id){
          this.setState({selectedUser:id});  
    }
    componentDidMount(){
        let headers = {Authorization: 'Bearer 12|CHLfhgWE1Lm4SiXynpfQg3D7pD6RkPD49rGCQjPY'} 
        axios.get('http://chat.test/api/all-user',{headers})
        .then(response=>{
            let data = response.data;
            let selectedUser = data[0].id;
            this.setState({users:data, selectedUser});
        })
    }
    render() {
        return (
            <div>
                <UsersList users={this.state.users} 
                selectedUser={this.state.selectedUser} 
                handleClick={(id)=>{this.clickHandler(id)}}/>
            </div>
        )
    }
}
