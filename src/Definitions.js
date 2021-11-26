import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Definitions.css";

export default function Definitions(props) {
  if (props.definition) {
    return (
      <div className="Definitions">
        <section>
          <h1>{props.definition.word}</h1>
          {props.definition.phonetics.map(function (phonetic, i) {
            return (
              <div key={i}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.definition.meanings.map(function (meaning, i) {
          return (
            <section key={i}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
