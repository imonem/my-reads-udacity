import Book from "./Book";

const Shelf = ({ shelfNames, books, filtered }) => {
  return (
    <>
      {shelfNames.map((shelfKey, i) => (
        <div key={i} className='bookshelf'>
          <h2 className='bookshelf-title'>{shelfKey.name}</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {books
                .filter((book) => book.shelf === shelfKey.id)
                .map((filtered) => (
                  <li key={filtered.id}>
                    <Book
                      book={filtered}
                      currentShelf={shelfKey.id}
                      shelfNames={shelfNames}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
      ))}
    </>
  );
};

export default Shelf;
