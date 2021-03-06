import './Books.css'
import React, { Component } from 'react'
import * as BooksAPI from '../api/BooksAPI'
import Book from './Book'
import MyShelfButton from './MyShelfButton'
import { DebounceInput } from 'react-debounce-input'

class Books extends Component {
  state = {
    query: '',
    books: [],
    loading: false,
  }

  updateQuery = (query) => {
    this.setState({ query: query })

    if (query.trim()) {
      this.setState({ loading: true })

      BooksAPI
        .search(query)
        .then((books) => {
          if (!books.error) {
            this.setState({ books, loading: false })
          } else {
            this.setState({ books: [], loading: false })
          }
        })
    } else {
      this.setState({ books: [] })
    }
  }


  render () {
    const { query, books, loading } = this.state

    return (
      <section className='books'>
        <header className='books__header'>
          <MyShelfButton />
          <DebounceInput
            className='books__search'
            placeholder='Search'
            minLength={3}
            debounceTimeout={300}
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)} />
        </header>
        <section className='books__result'>
          { loading &&
            <strong>Pesquisando...</strong>
          }
          { query.length > 0 && !loading &&
            <h2 className='books__title-result'>
              { books.length } results for { query }
            </h2>
          }
          <ul className='books__list'>
            { books.map((book) =>
              <li className='books__book' key={book.id}>
                <Book
                  id={book.id}
                  title={book.title}
                  imageLinks={book.imageLinks}
                  authors={book.authors} />
              </li>
            )
            }
          </ul>
        </section>
      </section>
    )
  }
}

export default Books
