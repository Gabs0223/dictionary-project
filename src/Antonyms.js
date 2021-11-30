import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  //console.log(props.synonyms);
  if (!props.antonyms.length) {
    return null;
  } else {
    return (
      <ul className="Antonyms">
        <div className="anto">Antonyms</div>
        {props.antonyms.map(function (antonym, i) {
          return <li key={i}>{antonym}</li>;
        })}
      </ul>
    );
  }
}
