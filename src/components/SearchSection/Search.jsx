import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <section id="search">
      <input type="search" placeholder="search for contry"></input>
      <div className="filtre">Filtre by Region</div>
    </section>
  );
}
