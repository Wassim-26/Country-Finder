import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav>
      <div className="left-text">
        <h1>Country finder</h1>
        <p>By Wassim Hamitouche</p>
      </div>
      <div className="right-text">
        <svg
          width={28}
          height={28}
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <h1>Dark Mode</h1>
      </div>
    </nav>
  );
}
