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
            <h1 className='text-center text-[14vh] font-bold text-[#E6C373] '>Events</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mx-5 my-3'>

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
