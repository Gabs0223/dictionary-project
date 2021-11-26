import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, i) {
        return (
          <div key={i}>
            <div className="definition">
              <strong>Definition:</strong>
              {definition.definition}
            </div>
            <br />
            <div className="example">
              <em>{definition.example}</em>
            </div>
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
