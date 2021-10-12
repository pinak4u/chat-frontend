import React from 'react'

function UsersList(props) {
    const handleClick = (id)=> props.handleClick(id);
    
    return (
        <div>
            <h4>UsersList</h4>
            <ul>
            {props.users.map(user=>{
                return (
                    <li key = {user.id} 
                    className={props.selectedUser==user.id ?'active':null} 
                    onClick={()=>handleClick(user.id)}>{user.name}
                    </li>
                ) 
            })}
            </ul>
        </div>
    
    )
}

export default UsersList
