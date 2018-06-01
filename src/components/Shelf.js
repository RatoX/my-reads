import './Shelf.css';
import React from 'react';
import Book from './Book';
import ShelfIcon from './ShelfIcon';
import PropTypes from "prop-types";

function Shelf ({ title, books, shelfIcon }) {
  const statusIconClassName = `shelf__icon shelf__status-${shelfIcon}`

  return (
    <section className="shelf">
      <header className="shelf__title">
        <ShelfIcon
          className={statusIconClassName}
          shelf={shelfIcon}>
        </ShelfIcon>
        { title }
      </header>
      <ol className="shelf__books">
        { books.map((book) =>
          <li className="shelf__book" key={book.id}>
            <Book
              id={book.id}
              title={book.title}
              imageLinks={book.imageLinks}
              shelf={book.shelf}
              authors={book.authors}>
            </Book>
          </li>
          )
        }
      </ol>
    </section>
  );
}

Shelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array,
  shelfIcon: PropTypes.string,
};

Shelf.defaultProps = {
  title: '',
  books: [],
  shelfIcon: '',
};

export default Shelf;
