import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Definitions(props) {
  if (props.definition) {
    return (
      <div className="Definitions">
        <h1>{props.definition.word}</h1>
        {props.definition.phonetics.map(function (phonetic, i) {
          return (
            <div key={i}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.definition.meanings.map(function (meaning, i) {
          return (
            <div key={i}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
