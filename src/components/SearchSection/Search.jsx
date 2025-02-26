import React from "react";
import "./Search.css";
import Icon from "../Icon/icon";
export default function Search() {
  return (
    <section id="mini-section">
      <div className="search">
        <Icon />
        <input type="search" placeholder="Search for contry..."></input>
      </div>
      <details className="filtre">
        <summary>Filtre by Region</summary>
        <p>All</p>
        <p>Africa</p>
        <p>Americas</p>
        <p>Asia</p>
        <p>Europe</p>
        <p>Oceania</p>
        <p>Polar</p>
      </details>
    </section>
  );
}
