import React from 'react'
import {FaSearch} from "react-icons/fa"
import './SearchBar.css';

export const SearchBar = () => {
    return (
        <div className='input-wrapper'>
        <FaSearch id='search-icon' size={24}/>
         <input placeholder='Search Here' type="text" />
        </div>
    )
}