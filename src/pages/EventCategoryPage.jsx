import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventCategoryPage = () => {
  const { category } = useParams(); // Get the category from the URL
  const [events, setEvents] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    // Fetch the events data
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        // Find the events for the selected category
        const categoryData = data.find(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
        if (categoryData) {
          setCategoryName(categoryData.category);
          setEvents(categoryData.events);
        } else {
          setCategoryName("Category Not Found");
          setEvents([]);
        }
      })
      .catch((err) => console.error("Error fetching events data:", err));
  }, [category]);

  return (
    <div className=" flex flex-col items-center  text-white text-center ">
      <h1 className="text-center text-[14vh] font-bold text-[#E6C373] font-charm 
               [text-shadow:0_0_5px_rgba(230,195,115,0.6),0_0_10px_rgba(230,195,115,0.4)] uppercase">{categoryName}</h1>
      {events.length > 0 ? (
        <div className="grid grid-cols-2 gap-8 px-5 pb-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-5 border-2 border-[#E6C373] rounded-lg  hover:bg-[rgba(25,25,112,0.4)]  transition-all duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold mb-3">{event.name}</h2>
              <p className="text-sm text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-400 mt-10">No events available for this category.</p>
      )}
    </div>
  );
};

export default EventCategoryPage;
