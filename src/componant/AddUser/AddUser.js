import React from 'react';

const AddUser = () => {
    const handleUser =(event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name , email}
        console.log(name , email);


        // send post request for backend at least
       
fetch('http://localhost:5000/user', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    alert('users added succesfully' );
    event.target.reset()
  })
          

    }
    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleUser}>
            <input type="text" name='name' placeholder='name' required />
            <br></br>
            <input type="email" name="email" placeholder='email' id="" />
            <br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;