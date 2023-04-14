import React, { useState } from "react";

const UpdatePopup = (props) => {
  const [title, setTitle] = useState(props.book.title);
  const [author, setAuthor] = useState(props.book.author);
  const [publisher, setPublisher] = useState(props.book.publisher);
  const [year, setYear] = useState(props.book.publishedYear);
  const [description, setDescription] = useState(props.book.description);

  const titleChanger = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  const updateHandle = (id) => {
    id = props.book.bookId;
    props.updateBook(id, title, author, publisher, year, description);
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
  const setListTrue = () => {
    props.trueFunc();
  };

  return (
    <div className="updateSearch">
      <input
        onChange={titleChanger}
        value={title}
        className="inputer"
        placeholder="Book title..."
      />
      <input
        onChange={authorChanger}
        value={author}
        className="inputer adder"
        placeholder="Author name..."
      />
      <input
        onChange={publisherChanger}
        value={publisher}
        className="inputer adder"
        placeholder="Publisher..."
      />
      <input
        onChange={yearChanger}
        value={year}
        className="inputer adder"
        placeholder="Published year..."
        type="number"
      />
      <input
        onChange={descriptionChanger}
        value={description}
        className="inputer adder"
        placeholder="Description..."
      />
      <button className="getButton" onClick={updateHandle}>
        Update Book
      </button>
      <button className="addButton cancel-button" onClick={setListTrue}>
        Cancel
      </button>
    </div>
  );
};

export default UpdatePopup;
