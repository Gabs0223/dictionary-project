import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css";

export default function Meaning(props) {
  //console.log(props.meaning);
  return (
    <div className="Meaning">
      <div className="pos">{props.meaning.partOfSpeech}</div>
      {props.meaning.definitions.map(function (definition, i) {
        return (
          <div key={i}>
            <div className="definition">{definition.definition}</div>
            <div className="example">{definition.example}</div>
            <div className="row">
              <div className="col-6">
                <Synonyms synonyms={definition.synonyms} />
              </div>
              <div className="col-6">
                <Antonyms antonyms={definition.antonyms} />
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
