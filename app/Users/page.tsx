import React from 'react'
import ProductCard from '../Components/ProductCard';



interface User {
    id:number;
    name:string;
    city:string;
    email:string;
    address:[];
    zipcode:number;
}

const UsersPage = async () => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users',
        // {cache:'no-store'} //For not allowing the changing of information fetched
        //or we can interchangeably use {next:{revalidate:10}   this will allow api to fetch data every 10 seconds
    );
    const users: User[]=await res.json();
  return (
    <>
    <h1>Users</h1>
    {/* <p>{new Date().toLocaleTimeString()}</p> */}
    <table className='table table-borderd'>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
        {users.map(user=><tr key={user.id}>
            <th>{user.name}</th>
        <th>{user.email}</th>  
            </tr>)}
        </tbody>
       
    </table>
   
    </>
    
  )
}

export default UsersPage
