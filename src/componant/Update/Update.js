import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {idi} = useParams();
    const [user , setUser] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/users/${idi}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div>
            
            <h1>{user?.name}</h1>
            <h1>{user?.email}</h1>
        </div>
    );
};

export default Update;