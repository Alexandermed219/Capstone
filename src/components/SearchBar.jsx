import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search Here"
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;
