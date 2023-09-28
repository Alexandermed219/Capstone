import React, { useState } from 'react';
import { PersonPlus } from 'react-bootstrap-icons';
import { userName } from '../API/API';

const Signupform = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await userName(username, password);

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h1 className='log-sign-css'><PersonPlus id='nav-icon' /> Sign Up Here</h1>
      <div className='sign-container'>
        <form onSubmit={handleSubmit} className='sign-up-form'>
          <div className='user-pass-form'>
            <h2>Enter First Name</h2><input type="text" placeholder='Enter First Name' />
            <h2>Enter Last Name</h2><input type="text" placeholder='Enter Last Name' />
            <h2>Create A Username</h2><input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <h2>Create A Password</h2><input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <h2>Enter Your Address</h2><input type="text" placeholder='Enter Your Address' />
          </div>
          <button className='sub-btn' type='submit'>Register</button>
        </form>
      </div>
      <footer id="copyright">
        &copy; 2023 Black Label Industries. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Signupform;
