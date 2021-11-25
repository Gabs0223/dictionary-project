import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Definitions from "./Definitions";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    //console.log(response.data[0]);
    setDefinition(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();
    //alert(`Searching for ${keyword}🔎📖`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
        <input type="search" onChange={handleKeyword} autoFocus={true} />
      </form>
      <Definitions definition={definition} />
    </div>
  );
}
