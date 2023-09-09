import React from "react";
import "./SearchResultsList.css"

export const SearchResultsList = ({ results }) => {
    return <div className="results-list">
        {
            results.map((results, id) => {
                return <div key={id}>{results.title}</div>
            })
        }
    </div>
}