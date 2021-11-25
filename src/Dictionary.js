import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}🔎📖`);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
        <input type="search" onChange={handleKeyword} autoFocus={true} />
      </form>
    </div>
  );
}
