import React, { useState, useEffect } from 'react';

const Timelinecomp = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch('/eventtimeline.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEventData(data);
      } catch (err) {
        setError(err);
        console.error("Error fetching event data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading events...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {eventData.map((dayData, index) => (
        <div 
          key={index} 
          className="mb-16 flex flex-col lg:flex-row justify-around items-center px-4 lg:px-8">
          {/* Date Container */}
          <div className="lg:w-1/4 text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="text-[12vw] lg:text-[22vh] font-bold text-[#E6C373] [text-shadow:0_0_5px_rgba(230,195,115,0.6),0_0_10px_rgba(230,195,115,0.4)]">
              {dayData.title.split(" ")[0]}
            </h2>
            <p className="text-[5vw] lg:text-[5vh] text-[#ffffff] ml-2 lg:ml-8">
              {dayData.title.split(" ")[1]}
            </p>
          </div>
          {/* Events Container */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2">
              {dayData.events.map((event, eventIndex) => (
                <div key={event.id} className="relative">
                  <div className="flex items-start">
                    <div className="w-3 h-3 rounded-full bg-red-800 mt-2 mr-2"></div>
                    <p className={`text-sm sm:text-base lg:text-lg ${
                        ["Prom Night", "DJ Night", "Bollywood Artist Night", "Artist Night", "Musical"].includes(event.name)
                          ? "font-bold text-[#E6C373] text-lg sm:text-xl lg:text-2xl glowing-text"
                          : "text-[#ffffff] "
                      }`}>
                      {event.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timelinecomp;
