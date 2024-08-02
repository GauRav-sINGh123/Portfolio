import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import About from "./components/About";
import Loader from "./components/Loader";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="">
      {isLoading ? (
        <Loader/> 
      ) : (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
