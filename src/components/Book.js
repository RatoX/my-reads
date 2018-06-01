import './Book.css';
import React from 'react';
import PropTypes from "prop-types";
import BookShelfSelection from './BookShelfSelection';

function Book({ id, title, imageLinks, authors, shelf }) {
  const alt = `Cover image for: ${title}`

  return (
    <figure className="book" key={ id }>
      <img className="book__image" src={ imageLinks.smallThumbnail } alt={ alt } />

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
        className="book__status-selection">
      </BookShelfSelection>
    </figure>
  )
}

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageLinks: PropTypes.object,
  authors: PropTypes.array,
};

Book.defaultProps = {
  title: '',
  authors: [],
  imageLinks: {},
};

export default Book;
