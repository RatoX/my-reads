import './Book.css';
import React from 'react';
import PropTypes from "prop-types";
import BookShelfSelection from './BookShelfSelection';
import * as BooksAPI from '../api/BooksAPI'

function Book({ id, title, imageLinks, authors, shelf, onBeforeUpdate, onAfterUpdate }) {
  const alt = `Cover image for: ${title}`
  const onSelectShelf = (newShelf) => {
    onBeforeUpdate()

    BooksAPI
      .update({ id }, newShelf)
      .then(() => {
        onAfterUpdate(newShelf)
      })
  }

  return (
    <figure className="book" key={ id }>
      <img
        className="book__image"
        src={ imageLinks.smallThumbnail }
        alt={ alt } />

      <figcaption className="book__information">
        <h1 className="book__title">
          { title }
        </h1>
        <small className="book__authors">
          { authors.join(', ') }
        </small>
      </figcaption>
      <BookShelfSelection
        bookShelf={shelf}
        className="book__status-selection"
        onSelectShelf={onSelectShelf}/>
    </figure>
  )
}

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageLinks: PropTypes.object,
  authors: PropTypes.array,
  onBeforeUpdate: PropTypes.func,
  onAfterUpdate: PropTypes.func,
};

Book.defaultProps = {
  title: '',
  authors: [],
  imageLinks: {},
  onBeforeUpdate: () => {},
  onAfterUpdate: () => {},
};

export default Book;
