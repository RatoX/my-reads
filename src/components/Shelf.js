/* eslint-disable react/jsx-no-bind */
import './Shelf.css'
import React, { Component } from 'react'
import Book from './Book'
import ShelfIcon from './ShelfIcon'
import PropTypes from 'prop-types'

class Shelf extends Component {
  static propTypes = {
    title: PropTypes.string,
    books: PropTypes.array,
    shelfIcon: PropTypes.string,
    onChangeBookShelf: PropTypes.func,
  };

  static defaultProps = {
    title: '',
    books: [],
    shelfIcon: '',
    onChangeBookShelf: () => {},
  };

  state = {
    loading: false,
  }

  render () {
    const { title, books, shelfIcon, onChangeBookShelf } = this.props
    const { loading } = this.state
    const statusIconClassName = `shelf__icon shelf__status-${shelfIcon}`
    const onBeforeUpdate = () => {
      this.setState({ loading: true })
    }
    const onAfterUpdate = (book, newShelf) => {
      const currentShelf = book.shelf
      book.shelf = newShelf
      onChangeBookShelf(currentShelf, book, newShelf)
      this.setState({ loading: false })
    }

    let shelfClassName = 'shelf'
    if (loading) {
      shelfClassName += ` ${shelfClassName}_loading`
    }

    return (
      <section className={shelfClassName}>
        <header className='shelf__title'>
          <ShelfIcon
            className={statusIconClassName}
            shelf={shelfIcon} />
          { title }
        </header>
        <ol className='shelf__books'>
          { books.map((book) =>
            <li className='shelf__book' key={book.id}>
              <Book
                id={book.id}
                title={book.title}
                imageLinks={book.imageLinks}
                shelf={book.shelf}
                authors={book.authors}
                onBeforeUpdate={onBeforeUpdate}
                onAfterUpdate={onAfterUpdate.bind(this, book)} />
            </li>
          )
          }
        </ol>
      </section>
    )
  }
}

export default Shelf
