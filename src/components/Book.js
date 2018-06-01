import './Book.css';
import React, { Component } from 'react';

function Book({ id, title, imageLinks, authors }) {
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
    </figure>
  )
}

export default Book;
