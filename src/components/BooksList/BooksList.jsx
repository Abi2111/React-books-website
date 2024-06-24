import { useContext, useEffect, useState } from 'react';
import { storeContext } from '../../Context/booksContext';
import { Link } from 'react-router-dom';

export default function BooksList() {
  const [books, setBooks] = useState([]);
  const { book, setBook } = useContext(storeContext);
  console.log(book);
  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch(
        'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=LcL5IWPsBGOc3kQ4NguXnMRxgr1hC6xl'
      );
      const data = await res.json();
      console.log(data.results.books);
      setBooks(data.results.books);
    }
    fetchBooks();
  }, []);
  return (
    <div className="bookslist">
      <h1>All Books</h1>
      {books.length > 0 ? (
        <ul className="books-items">
          {books?.map(book => (
            <Link
              to={`/book/${book.rank}`}
              key={book.rank}
              className="book-item"
            >
              <div className="book" onClick={() => setBook(book)}>
                <img className="book-poster" src={book.book_image} alt="" />
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-desc">{book.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      ) : (
        <div className="loader">
          <div className="jelly"></div>
          <svg width="0" height="0" className="jelly-maker">
            <defs>
              <filter id="uib-jelly-ooze">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="6.25"
                  result="blur"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="ooze"
                ></feColorMatrix>
                <feBlend in="SourceGraphic" in2="ooze"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
}
