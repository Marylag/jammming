import React, {useState} from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  function passTerm() {
    props.onSearch(term);
  }

  function handleTearmChange({ target }) {
    setTerm(target.value);
  }

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTearmChange}
      />
      <button className="SearchButton" onClick={passTerm} >
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;