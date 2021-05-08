//Main react library
import React, { useState, useEffect } from "react";

//Router
import { Link } from "react-router-dom";

//components
import Shelf from "./components/Shelf";

//server API
import * as BooksAPI from "./BooksAPI";

//styling
import "./App.css";
// import Search from "./components/Search";

//main App
const BooksApp = () => {
  const [books, setBooks] = useState([]);
  const [currentShelf, setCurrentShelf] = useState(books);

  // const shelfKeys = ["currentlyReading", "wantToRead", "read"];
  // const shelfTitles = ["Currently Reading", "Want to Read", "Read"];
  const shelfNames = [
    { id: "currentlyReading", name: "Currently Reading" },
    { id: "wantToRead", name: "Want to Read" },
    { id: "read", name: "Read" },
  ];

  //Get books from API
  useEffect(() => {
    const fetchBooks = async () => {
      const getBooksFromServer = await BooksAPI.getAll();
      setBooks(getBooksFromServer);
      console.log(getBooksFromServer);
    };
    fetchBooks();
  }, []);

  //todo update shelf
  // useEffect(() => {
  //   const bookShelfUpdate = async () => {
  //     const updateShelf = await BooksAPI.update(id);
  //   };
  //   return () => {
  //     cleanup;
  //   };
  // }, []);

  //todo search in bar

  return (
    <div className='app'>
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <Shelf
              shelfNames={shelfNames}
              books={books}
              currentShelf={currentShelf}
              setShelf={setCurrentShelf}
            />
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksApp;
