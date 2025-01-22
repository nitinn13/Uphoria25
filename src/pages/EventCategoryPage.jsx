import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const EventCategoryPage = () => {
  const { category } = useParams();
  const [events, setEvents] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
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
    <div className="flex flex-col items-center text-white text-center overflow-hidden">
      <h1
        className="text-center text-[14vh] font-bold text-[#E6C373] font-charm 
               [text-shadow:0_0_5px_rgba(230,195,115,0.6),0_0_10px_rgba(230,195,115,0.4)] uppercase"
      >
        {categoryName}
      </h1>
      {events.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 pb-6 w-full">
          {events.map((event) => (
            <a
              href={event.link}
              target="_blank"
              key={event.id}
              className="block"
            >
              <div
                className="border-2 border-[#E6C373] h-[13vh] sm:h-[25vh] rounded-lg hover:bg-[rgba(25,25,112,0.4)] transition-all duration-300 ease-in-out w-full sm:w-[40vw] overflow-hidden"
              >
                <img
                  src={event.banner}
                  alt={`${event.name} banner`}
                  loading="lazy"
                  className="object-contain w-full h-full"
                />
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-400 mt-10">
          No events available for this category.
        </p>
      )}
    </div>
  );
};

export default EventCategoryPage;
