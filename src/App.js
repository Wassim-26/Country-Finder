import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navebar/Navbar";
import SearchSection from "./components/SearchSection/Search";
import React, { useState, useEffect } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="app">
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Navbar />
        <div className="butt-dark-light-container">
          <button className="butt-dark-light" onClick={toggleDarkMode}>
            {darkMode ? "Turn Off Dark Mode" : "Enable Dark Mode"}
          </button>
        </div>
        <SearchSection />
        <Hero />
      </div>
    </div>
  );
}

export default App;
