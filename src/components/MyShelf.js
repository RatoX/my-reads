import './MyShelf.css'
import React, { Component } from 'react'
import Shelf from '../components/Shelf'
import * as BooksAPI from '../api/BooksAPI'

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

  render () {
    const { wantToRead, currentlyReading, read } = this.state

    return (
      <section className="my-shelf">
        <header className="my-shelf__header">My Reads</header>
        <section className="my-shelf__sections">
          <small className="my-shelf__information">select a book to change their status</small>
          <Shelf
            shelfIcon="currentlyReading"
            title="Currently Reading"
            books={ currentlyReading } />
          <Shelf
            shelfIcon="wantToRead"
            title="Want to Read"
            books={ wantToRead } />
          <Shelf
            shelfIcon="read"
            title="Read"
            books={ read } />
        </section>
      </section>
    )
  }
}

export default MyShelf
