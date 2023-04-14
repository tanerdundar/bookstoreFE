import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import List from "./components/List";
import axios from "axios";
import Popup from "./components/Popup";
import UpdatePopup from "./components/UpdatePopup";

function App() {
  const [book, setBook] = useState([]);
  const [situation, setSituation] = useState(true);
  const [isListed, setIsListed] = useState(false);
  const [first, setFirst] = useState("");
  const [list, setList] = useState(true);
  const [bookForUpdate, setBookForUpdate] = useState("");

  const getAll = async () => {
    const response = await axios.get("http://localhost:8080/api/books");
    setBook(response.data);
    setIsListed(true);
  };
  const getOneBookById = async (input) => {
    const response = await axios.get("http://localhost:8080/api/books");
    let searchingBooks = [];
    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i].title.includes(input)) {
        searchingBooks.push(response.data[i]);
      }
    }
    setBook(searchingBooks);
  };

  const onDelete = async (id) => {
    const response = await axios.delete(
      "http://localhost:8080/api/books/" + id
    );
    const afterDeletingBooks = book.filter((book) => {
      return book.bookId != id;
    });
    setBook(afterDeletingBooks);
  };

  const onUpdate = (id) => {
    const updateBook = book.filter((book) => {
      return book.bookId == id;
    });
    setBookForUpdate(updateBook[0]);
    setList(false);
  };

  const truer = () => {
    setList(true);
  };

  const setFalse = () => {
    setSituation(false);
  };
  const setTrue = () => {
    setSituation(true);
  };
  const onAddOneBook = async (
    title,
    author,
    publisher,
    publishedYear,
    description
  ) => {
    const createdBook = {
      title,
      author,
      publisher,
      publishedYear,
      description,
    };
    const response = await axios.post(
      "http://localhost:8080/api/books",
      createdBook
    );
    setBook([...book, response.data]);
  };
  const updateBook = async (
    id,
    title,
    author,
    publisher,
    publishedYear,
    description
  ) => {
    const updatedBook = {
      title,
      author,
      publisher,
      publishedYear,
      description,
    };
    const response = await axios.put(
      "http://localhost:8080/api/books/" + id,
      updatedBook
    );
    setList(true);
    getAll();
  };

  return (
    <div className="App">
      <Search
        book={first}
        situation={situation}
        getAllFunc={getAll}
        setFalse={setFalse}
        setTrue={setTrue}
        addOneBook={onAddOneBook}
        onGetBook={getOneBookById}
      />
      <>
        {list ? (
          <List delete={onDelete} update={onUpdate} array={book} />
        ) : (
          <UpdatePopup
            book={bookForUpdate}
            trueFunc={truer}
            updateBook={updateBook}
          />
        )}
      </>
    </div>
  );
}

export default App;
