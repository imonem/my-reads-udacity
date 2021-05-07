import Book from "./Book";
import React from "react";

export const Shelf = ({ shelfNames, books }) => {
  return (
    <div>
      <div className='bookshelf'>
        {shelfNames.map((shelf) => (
          <div key={shelf}>
            <h2 className='bookshelf-title'>{shelf}</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid' />
              <Book books={books} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// import Book from "./Book";

// const Shelf = ({ booksLibrary }) => {
//   const shelfTitle = ["Currently Reading", "Want to Read", "Read"];

//   return (
//     <div className='bookshelf'>
//       {shelfTitle.map((shelf) => (
//         <div key={shelf}>
//           <h2 className='bookshelf-title'>{shelf}</h2>
//           <div className='bookshelf-books'>
//             <ol className='books-grid' />
//             <Book books={books.shelf} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

export default Shelf;
