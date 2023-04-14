import React, { useState } from "react";

const Popup = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState();
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    props.addOneBook(title, author, publisher, year, description);
  };
  const titleChanger = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  const authorChanger = (e) => {
    const value = e.target.value;
    setAuthor(value);
  };
  const publisherChanger = (e) => {
    const value = e.target.value;
    setPublisher(value);
  };
  const yearChanger = (e) => {
    const value = e.target.value;
    setYear(value);
  };
  const descriptionChanger = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  return (
    <div className="search">
      <input
        onChange={titleChanger}
        className="inputer"
        placeholder="Book title..."
      />
      <input
        onChange={authorChanger}
        className="inputer adder"
        placeholder="Author name..."
      />
      <input
        onChange={publisherChanger}
        className="inputer adder"
        placeholder="Publisher..."
      />
      <input
        onChange={yearChanger}
        className="inputer adder"
        placeholder="Published year..."
        type="number"
      />
      <input
        onChange={descriptionChanger}
        className="inputer adder"
        placeholder="Description..."
      />

      <button className="getButton" onClick={handleAdd}>
        Add Book
      </button>
      <button className="addButton cancel-button" onClick={props.setTrue}>
        Cancel
      </button>
    </div>
  );
};

export default Popup;
