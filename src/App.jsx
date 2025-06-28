import React, { useState, useEffect } from "react"; // ✅ Add useEffect here
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import AboutPage from "./components/AboutPage";
import QualificationPage from "./components/QualificationPage";
import SkillsPage from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage";
import WelcomePage from "./components/WelcomePage";
import Timeline from "./components/TimeLine";
import ContactPage from "./components/ContactPage";
import AOS from "aos"; // ✅ Import AOS
import "aos/dist/aos.css"; //Use to Import the Css from the AOS
import SplashCursor from "./SplashCursor";

function App() {
  const [isVisible, setIsVisible] = useState(!true);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true }); // ✅ AOS initialization
  }, []);

  return (
    <div className="font-poppins dark:bg-black">
      {/* Show WelcomePage only if isVisible is true */}
      
      {/* <SplashCursor className="block sm:hidden" /> */}


      {/* <WelcomePage isVisible={isVisible} setIsVisible={setIsVisible} /> */}

      {/* Show other components only after clicking Continue */}
      {(!isVisible || !!sessionStorage.getItem("show")) && (
        <>
          <NavBar />
          <HomePage />
          <AboutPage />
          <QualificationPage />
          <SkillsPage />
          <ProjectsPage />
          {/* <Timeline /> */}
          <ContactPage />
        </>
      )}
    </div>
  );
}

export default App;
