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
        // Registration successful, extract and store the token from the response
        const { token } = await response.json();
        console.log(token)
        // Store the token in localStorage (you should handle security appropriately)
        localStorage.setItem('token', token);

        // You can also redirect the user to another page after successful registration
        // history.push('/dashboard');
      } else {
        // Handle registration error (e.g., show an error message)
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h1 className='log-sign-css'><PersonPlus id='nav-icon'/> Sign Up Here</h1>
      <div className='sign-container'>
        <form onSubmit={handleSubmit} className='sign-up-form'>
          <h2 className='user-pass-form'>Create A Username</h2><input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
          <h2 className='user-pass-form'>Create A Password</h2><input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className='sub-btn' type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signupform;
