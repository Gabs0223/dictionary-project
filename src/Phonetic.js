import React from "react";

export default function Phonetic(props) {
  //console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        Pronunciation
      </a>
      <br />
      <em>{props.phonetic.text}</em>
    </div>
  );
}
//Onclick eventListener
// Web Audio API
// Font Awesome
// react audioplayer
