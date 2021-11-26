import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (!props.synonyms.length) {
    return null;
  } else {
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong>
        <ul>
          {props.synonyms.map(function (synonym, i) {
            return <li key={i}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  }
}
