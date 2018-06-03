import './Book.css'
import * as BooksAPI from '../api/BooksAPI'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfSelection from './BookShelfSelection'
import ShelfIcon from './ShelfIcon'

class Book extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    imageLinks: PropTypes.object,
    authors: PropTypes.array,
    onBeforeUpdate: PropTypes.func,
    onAfterUpdate: PropTypes.func,
  }

  static defaultProps = {
    title: '',
    authors: [],
    imageLinks: {
      smallThumbnail: 'http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif'
    },
    onBeforeUpdate: () => {},
    onAfterUpdate: () => {},
  }

  state = {
    shelf: '',
    loaded: false,
  }

  loadCurrentStatus () {
    BooksAPI
      .get(this.props.id)
      .then((book) => {
        this.setState({ shelf: book.shelf, loaded: true })
      })
  }

  componentDidMount () {
    this.loadCurrentStatus()
  }

  validShelf (shelf) {
    return ['currentlyReading', 'read', 'wantToRead'].includes(shelf)
  }

  render () {
    const { id, title, imageLinks, authors, onBeforeUpdate, onAfterUpdate } = this.props
    const { shelf, loaded } = this.state
    const alt = `Cover image for: ${title}`
    const onSelectShelf = (newShelf) => {
      onBeforeUpdate()

      BooksAPI
        .update({ id }, newShelf)
        .then(() => {
          onAfterUpdate(newShelf)
          this.setState({ shelf: newShelf })
        })
    }

    return (
      <figure className='book' key={id}>
        { this.validShelf(shelf) && (
          <figure className='book__sticky'>
            <ShelfIcon
              className='book__shelf'
              shelf={shelf} />
          </figure>
        )}
        <img
          className='book__image'
          src={imageLinks.smallThumbnail}
          alt={alt} />

        <figcaption className='book__information'>
          <h1 className='book__title'>
            { title }
          </h1>
          <small className='book__authors'>
            { authors.join(', ') }
          </small>
        </figcaption>
        { loaded && (
          <BookShelfSelection
            bookShelf={shelf}
            className='book__status-selection'
            onSelectShelf={onSelectShelf} />
        )}
      </figure>
    )
  }
}

export default Book
