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

//main App
const BooksApp = () => {
  const [booksLibrary, setBookslibrary] = useState([]);
  const shelfNames = ["Currently Reading", "Want to Read", "Read"];

  //Get books from API
  useEffect(() => {
    const fetchBooks = async () => {
      const getBooksFromServer = await BooksAPI.getAll();
      setBookslibrary(getBooksFromServer);
      console.log(getBooksFromServer);
    };
    fetchBooks();
  }, []);

  //todo update shelf

  //todo search in bar

  return (
    <div className='app'>
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <Shelf shelfNames={shelfNames} books={booksLibrary} />
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
