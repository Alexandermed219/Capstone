
import React, { useState, useEffect }  from 'react';

const MyPage = () => {
  const [base, setBase] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?sort=asc')
      .then(res => res.json())
      .then(json => setBase(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
      <ul className='listing'>
        {base.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyPage;
