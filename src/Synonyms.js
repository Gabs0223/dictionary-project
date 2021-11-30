import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  //console.log(props.synonyms);
  if (!props.synonyms.length) {
    return null;
  } else {
    return (
      <ul className="Synonyms">
        <div className="syn">Synonyms</div>
        {props.synonyms.map(function (synonym, i) {
          return <li key={i}>{synonym}</li>;
        })}
      </ul>
    );
  }
}
