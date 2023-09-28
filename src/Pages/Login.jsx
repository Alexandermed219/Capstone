import React, { useState, useEffect } from 'react';
import { PersonCheck } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ token, setToken, setCart }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = '1';

      fetch(`https://fakestoreapi.com/carts/${userId}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Failed to fetch cart data');
          }
        })
        .then((json) => {
          console.log("User's cart data:", json);
          setCart(json.products);
        })
        .catch((error) => console.error('Error fetching cart data:', error));

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
        setToken(token);
        localStorage.setItem('token', token);

        console.log(token);
        navigate('/Products');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/Products');
    }
  }, [token, navigate]);

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
      <footer id="copyright">
        &copy; 2023 Black Label Industries. All Rights Reserved.
      </footer>
    </div>
  );
};

export default LoginForm;
