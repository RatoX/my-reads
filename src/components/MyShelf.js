/* eslint-disable react/jsx-no-bind */
import './MyShelf.css'
import React, { Component } from 'react'
import Shelf from '../components/Shelf'
import * as BooksAPI from '../api/BooksAPI'
import SearchButton from './SearchButton'

class MyShelf extends Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => {
        const wantToRead = [], currentlyReading = [], read = []

        books.forEach((b) => {
          if (b.shelf === 'wantToRead')
            wantToRead.push(b)
          else if (b.shelf === 'read')
            read.push(b)
          else if (b.shelf === 'currentlyReading')
            currentlyReading.push(b)
        })

        this.setState({ books, wantToRead, currentlyReading, read })
      })
  }

  changeBookShelf(currentShelf, book, newShelf) {
    this.setState((state) => {
      state[currentShelf] = state[currentShelf].filter(x => x.id !== book.id)

      if (state[newShelf]) {
        state[newShelf] = state[newShelf].concat(book)
      }

      return state
    })
  }

  render () {
    const { wantToRead, currentlyReading, read } = this.state

    return (
      <section className='my-shelf'>
        <header className='my-shelf__header'>
          <SearchButton />
          <h1 className='my-shelf__title'>My Reads</h1>
        </header>
        <section className='my-shelf__sections'>
          <small className='my-shelf__information'>select a book to change their status</small>
          <Shelf
            shelfIcon='currentlyReading'
            title='Currently Reading'
            books={currentlyReading}
            onChangeBookShelf={this.changeBookShelf.bind(this)} />
          <Shelf
            shelfIcon='wantToRead'
            title='Want to Read'
            books={wantToRead}
            onChangeBookShelf={this.changeBookShelf.bind(this)} />
          <Shelf
            shelfIcon='read'
            title='Read'
            books={read}
            onChangeBookShelf={this.changeBookShelf.bind(this)} />
        </section>
      </section>
    )
  }
}

export default MyShelf
