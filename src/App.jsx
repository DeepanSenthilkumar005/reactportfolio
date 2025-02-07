import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import AboutPage from "./components/AboutPage";
import QualificationPage from "./components/QualificationPage";
import SkillsPage from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage";
import WelcomePage from "./components/WelcomePage";
import Timeline from "./components/TimeLine";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="font-poppins dark:bg-black">
      {/* Show WelcomePage only if isVisible is true */}
      <WelcomePage isVisible={isVisible} setIsVisible={setIsVisible} />

      {/* Show other components only after clicking Continue */}
      {!isVisible && (
        <>
          <NavBar />
          <HomePage />
          <AboutPage />
          <QualificationPage />
          <SkillsPage />
          <ProjectsPage />
          {/* <Timeline /> */}
        </>
      )}
    </div>
  );
}

export default App;
