import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // Method to close the side Menu when a link is clicked
  const closeSidebarMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggleTimes={handleIsOpen}
        closeSidebar={closeSidebarMenu} 
      />
      <Navbar toggleBars={handleIsOpen} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Services/>
      <Footer/>
    </>
  );
};

export default Home;
