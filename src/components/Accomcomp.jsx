import React, { useState, useEffect } from 'react';

const AccomComp = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await fetch('/accomodation.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAccommodations(data.accommodations);
      } catch (error) {
        setError(error);
        console.error("Error fetching accommodations:", error);
      }
    };

    fetchAccommodations();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  if (accommodations.length === 0) {
    return <div className="text-gray-500">Loading accommodations...</div>;
  }

  return (
    <div id="accomcomp" className="flex flex-col items-center container mx-auto p-4">
      <h2 className="text-center text-[10vw] mt-[10vh] mb-[10vh] sm:text-[8vh] md:text-[6vh] lg:text-[12vh] font-bold text-[#E6C373] font-charm 
               [text-shadow:0_0_5px_rgba(230,195,115,0.6),0_0_10px_rgba(230,195,115,0.4)] uppercase">
        Accommodation
      </h2>
      <ul className="flex flex-wrap justify-center gap-6 lg:flex-col">
        {accommodations.map((accommodation) => (
          <li
            key={accommodation.id}
            className="border-2 border-[#E6C373] rounded-lg hover:bg-[rgba(25,25,112,0.4)] transition-all duration-300 ease-in-out
                       w-full sm:w-[90%] md:w-[45%] lg:w-[40vw] overflow-hidden"
          >
            <a href={accommodation.link} target="_blank" rel="noopener noreferrer" className="block">
              <img
                src={accommodation.image}
                alt="Accommodation"
                className="w-full h-auto object-cover"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccomComp;
