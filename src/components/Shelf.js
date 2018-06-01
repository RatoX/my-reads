import './Shelf.css';
import React, { Component } from 'react';
import Book from './Book';
import StatusIcon from './StatusIcon';

class Shelf extends Component {

  render() {
    const { title, books, statusIcon } = this.props
    const statusIconClassName = `shelf__icon shelf__status-${statusIcon}`

    return (
      <section className="shelf">
        <header className="shelf__title">
          <StatusIcon className={statusIconClassName} status={statusIcon}></StatusIcon>
          { title }
        </header>
        <ol className="shelf__books">
          { books.map((book) =>
            <li className="shelf__book" key={book.id}>
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
