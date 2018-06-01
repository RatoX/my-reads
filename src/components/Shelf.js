import './Shelf.css';
import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {

  render() {
    const { title, books } = this.props

    return (
      <section className="shelf">
        <header className="shelf__title">{ title }</header>
        <ol className="shelf__books">
          { books.map((book) =>
            <li className="shelf__book">
              <Book id={book.id} title={book.title} imageLinks={book.imageLinks} authors={book.authors}></Book>
            </li>
            )
          }
        </ol>
      </section>
    );
  }

}

export default Shelf;
