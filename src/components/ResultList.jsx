import React from 'react';

function ResultList({ results }) {
  return (
    <ul>
      {results.map((result, index) => (
        <li key={index}>{result.title}</li>
      ))}
    </ul>
  );
}

export default ResultList;
