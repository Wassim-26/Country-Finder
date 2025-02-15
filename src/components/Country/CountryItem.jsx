import React from "react";

export default function CountryItem(props) {
  return (
    <div className="mini-box">
      <img src={props.flag} height={182} />
      <div className="text">
        <h3>{props.name}</h3>
        <p>
          Population :<span> {props.population} </span>
        </p>
        <p>
          Region :<span> {props.region} </span>
        </p>
        <p>
          Capital : <span>{props.capital} </span>
        </p>
      </div>
    </div>
  );
}
