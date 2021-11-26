import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Definitions from "./Definitions";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaulKeyword);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    //console.log(response.data[0]);
    setDefinition(response.data[0]);
  }

  function searchWord() {
    console.log(`${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    searchWord();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeyword}
              autoFocus={true}
              defaultValue={props.defaulKeyword}
            />
          </form>
          <div className="hint">suggested words: flower, dog, car...</div>
        </section>
        <Definitions definition={definition} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
