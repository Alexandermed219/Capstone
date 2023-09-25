import React from 'react';
import { useState } from 'react';
import { PersonCheck } from 'react-bootstrap-icons';


const Signupform = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1 className='log-sign-css'><PersonCheck id='nav-icon'/> Login</h1>
            <div className='sign-container'>
                <form className='sign-up-form'>
                    <h2 className='user-pass-form'>Enter Username</h2><input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <h2 className='user-pass-form'>Enter Password</h2><input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='sub-btn' type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Signupform;
