import React, { useState } from 'react';
import './UserShow.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserShow = ({user}) => {

  
  
    const {_id , name , email} = user;
    console.log(user);

    const handleUserDelete= id=>{
      const procced = window.confirm('are you sure delte this data')
      if(procced){
      
        fetch(`http://localhost:5000/users/${id}`,{
          method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.deletedCount>0){
            
            
                    

          }

        })
      }
    }
    return (
        <div>
            
            <Card className='card-style' style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
    
    <p><Link className='text-decoration-none btn btn-success' to={`/ident/${_id}`} >Update</Link></p>
    <p><button onClick={()=>handleUserDelete(_id)} className='btn btn-danger' >Delete</button></p>
  </Card.Body>
</Card>
        </div>
    );
};

export default UserShow;