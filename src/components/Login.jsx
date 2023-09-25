import React, { useState } from 'react';
import { PersonCheck } from 'react-bootstrap-icons';
import { userName } from '../API/API'; // Assuming this function handles the API call.



const Signupform = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Authentication successful
        const json = await response.json();

        // Assuming the response contains a token
        const token = json.token;

        // You can store the token in local storage or a state variable
        // For example, you can use localStorage to store the token:
        localStorage.setItem('token', token);

        // Handle successful login (e.g., redirect to another page)
        console.log(token);
      } else {
        // Authentication failed, handle error (e.g., show an error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h1 className='log-sign-css'>
        <PersonCheck id='nav-icon' /> Login
      </h1>
      <div className='sign-container'>
        <form onSubmit={handleSubmit} className='sign-up-form'>
          <h2 className='user-pass-form'>Enter Username</h2>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h2 className='user-pass-form'>Enter Password</h2>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='sub-btn' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signupform;
