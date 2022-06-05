import React, { useEffect, useState } from 'react';
import UserShow from '../UserShow/UserShow';

const Home = () => {
    const [users ,setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h2>this is home:{users.length}</h2>
            <div className='users-style'>
                {
                   users.map(user => <UserShow user={user}></UserShow>) 
                }
            </div>
        </div>
    );
};

export default Home;