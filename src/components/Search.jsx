import { useState } from "react";
import Popup from "./Popup";
import axios from "axios";

function Search(props) {
  const [inputValue, setInputValue] = useState("");

  const inputRefresher = (e) => {
    setInputValue(e.target.value);
  };

  const handleGetOneBook = () => {
    if (inputValue.length < 3) {
      alert("at least 3 characters please...");
    } else {
      props.onGetBook(inputValue);
    }
  };
  return (
    <>
      {props.situation ? (
        <div className="search">
          <input
            className="inputer"
            placeholder="Search..."
            onChange={inputRefresher}
          />
          <button className="getAllButton" onClick={props.getAllFunc}>
            Get All Books
          </button>
          <div>
            <button className="getButton" onClick={handleGetOneBook}>
              Get Book
            </button>
            <button className="addButton" onClick={props.setFalse}>
              Add Book
            </button>
          </div>
        </div>
      ) : (
        <Popup setTrue={props.setTrue} addOneBook={props.addOneBook} />
      )}
    </>
  );
}

export default Search;
