import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Categories = () => {
  const [buttons, setButtons] = useState([]);
//   const navigate = useNavigate();

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json()) 
      .then((data) => setButtons(data)) 
      .catch((err) => console.error('Error fetching button data:', err));
  }, []);

  return (
    <div>
      <h1 className='text-center text-4xl font-bold'>Categories</h1>
      <div>
        
        {buttons.map((btn) => (
          <Button
            key={btn.id}
            label={btn.label}
            // onClick={() => navigate(btn.path)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
