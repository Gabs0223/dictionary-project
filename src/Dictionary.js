import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Definitions from "./Definitions";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    //console.log(response.data[0]);
    setDefinition(response.data[0]);
  }

  function searchWord() {
    console.log(`${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    const pexelsApikey =
      "563492ad6f91700001000001186e2cae097549ca967bef971b7d01ed";
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApikey}` } })
      .then(handlePexels);
  }

  function handlePexels(response) {
    //console.log(response);
    setPhotos(response.data.photos);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
