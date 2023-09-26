import React from 'react';
import { Link } from 'react-router-dom';
import { House } from 'react-bootstrap-icons';
import { Cart } from 'react-bootstrap-icons';
import { PersonCheck } from 'react-bootstrap-icons';
import { PersonPlus } from 'react-bootstrap-icons';
import Shopbtn from './Shopbtn';

const Navbar = ({ token, cart }) => {

    return (
        <div id='navbar'>
            <nav >
                <ul>
                    <li>
                        <Link to={"/"}>
                            <h1 id='nav-style'><House id='nav-icon' />Home</h1>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Products">
                            <h1 id='nav-style'><Cart id='nav-icon' />Explore Products</h1>
                        </Link>
                    </li>
                    {!token && <li>
                        <Link to="/Login">
                            <h1 id='nav-style'><PersonCheck id='nav-icon' />Log In</h1>
                        </Link>
                    </li>}
                    {!token && <li>
                        <Link to="/Sign-up">
                            <h1 id='nav-style'><PersonPlus id='nav-icon' />Sign Up</h1>
                        </Link>
                    </li>}
                    {token && <div>
                        {<Shopbtn cart={cart} />}
                    </div>}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
