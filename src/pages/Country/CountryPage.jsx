import React from "react";
import "./CountryPage.css";
import { Link } from "react-router";
export default function CountryPage() {
  return (
    <div className="contry-information-container">
      <div className="right">
        <div className="button-container">
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
        <img src="https://flagcdn.com/dz.svg" width={460} height={310} />
      </div>
      <div className="left">
        <h2>Algeria</h2>
        <div className="information">
          <p>nativeName : الجزائر</p>
          <p>Population : 44,700,000</p>
          <p>Region : Africa</p>
          <p>Sub Region : Northern Africa</p>
          <p>Capital : Algiers</p>
          <p>Top Level Domain : .dz</p>
          <p>Currencies : Algerian dinar</p>
          <p>Languages : Arabic</p>
        </div>
      </div>
    </div>
  );
}
