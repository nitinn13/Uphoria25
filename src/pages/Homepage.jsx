import React, { useRef } from 'react';
import Uphoriatext from '../components/Uphoriatext';
import Navbar from '../components/Navbar';
import Desc from '../components/Desc';
import Categories from '../components/Categories';
import Dates from '../components/Dates';
import Footer from '../components/Footer';
import PrizePool from '../components/PrizePool';
import ContactInfo from '../components/ContactInfo';
import FAQSection from '../components/FAQsection';

const Homepage = () => {
  const categoriesRef = useRef(null);

  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[12vw]">
      <div className="sticky top-[1vh] z-10">
        <Navbar onEventsClick={scrollToCategories} />
      </div>

      <Uphoriatext />
      <Desc />
      <PrizePool />
      <Dates />
      {/* Attach the ref to the Categories component */}
      <div ref={categoriesRef}>
        <Categories />
      </div>
      <FAQSection/>
      <ContactInfo />
      <Footer/>
      
    </div>
  );
};

export default Homepage;
