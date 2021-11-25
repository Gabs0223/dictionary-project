import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms.lenght !== 0) {
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
  } else {
    return (
      <div>
        <br />
      </div>
    );
  }
}
