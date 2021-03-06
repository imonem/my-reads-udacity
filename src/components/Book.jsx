import BookChanger from "./BookChanger";

const Book = ({ book, currentShelf, setShelf }) => {
  return (
    <div key={book.id} className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail}`,
          }}
        />
        <BookChanger
          book={book}
          currentShelf={currentShelf}
          onChange={setShelf}
        />
      </div>
      <div className='book-title'>{book.title}</div>
      {book.authors.map((author) => (
        <div key={author} className='book-authors'>
          {author}
        </div>
      ))}
    </div>
  );
};

export default Book;

//"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
