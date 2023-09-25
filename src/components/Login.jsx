import React, { useState, useEffect } from 'react';
import { PersonCheck } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';


const LoginForm = ({token, setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

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
        const json = await response.json();
        const token = json.token;
        localStorage.setItem('token', token);
        setToken(token);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
//   useEffect(() => {
//     // Check if there is a token, and if so, navigate to the desired page (e.g., Products)
//     if (token) {
//       navigate('/Products');
//     }
//   }, [token, navigate]);
  
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

export default LoginForm;
