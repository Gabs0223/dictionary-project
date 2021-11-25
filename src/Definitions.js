import React from "react";
import Meaning from "./Meaning";

export default function Definitions(props) {
  if (props.definition) {
    return (
      <div className="Definitions">
        <h1>{props.definition.word}</h1>
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
