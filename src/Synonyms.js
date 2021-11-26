import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (!props.synonyms.length) {
    return null;
  } else {
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong>
        {props.synonyms.map(function (synonym, i) {
          return <p key={i}>{synonym}</p>;
        })}
      </div>
    );
  }
}
