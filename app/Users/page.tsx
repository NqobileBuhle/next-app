import React from 'react'
import ProductCard from '../Components/ProductCard';



interface User {
    id:number;
    name:string;
    username:string;
    email:string;
}

const UsersPage = async () => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[]=await res.json();
  return (
    <>
    <h1>Users</h1>
    <ul>
        {users.map(user=><li key={user.id}>{user.name} {user.username}<br/> {user.email} <br/> <br/></li>)}
    </ul>
   
    </>
    
  )
}

export default UsersPage
