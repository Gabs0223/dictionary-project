import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          <strong>Synonyms:</strong>
          {props.synonyms.map(function (synonym, i) {
            return <li key={i}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
