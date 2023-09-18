import React from 'react'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa"
import './SearchBar.css';

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch('https://fakestoreapi.com/products?sort=asc')
            .then((Response) => Response.json())
            .then(json => {
                const results = json.filter((Products) => {
                    return value &&
                        Products &&
                        Products.title &&
                        Products.title.toLowerCase().includes(value);
                });
                setResults(results);
            });

    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className='input-wrapper'>
            <FaSearch id='search-icon' size={24} />
            <input placeholder='Search Products'
                type="text"
                value={input}
                onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}