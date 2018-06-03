import './BookShelfSelection.css'
import React from 'react'
import ShelfIcon from './ShelfIcon'
import PropTypes from 'prop-types'

function BookShelfSelection ({ className, bookShelf, onSelectShelf }) {
  const bookShelfSelectionClassName = `book-shelf-selection ${className}`
  const iconClassName = 'book-shelf-selection__icon'
  const shelfList = ['currentlyReading', 'wantToRead', 'read'].filter(i => i !== bookShelf)

  return (
    <section className={bookShelfSelectionClassName}>
      { shelfList.map((shelf) =>
        <figure
          key={shelf}
          onClick={() => onSelectShelf(shelf)}>
          <ShelfIcon
            className={iconClassName + ' ' + iconClassName+'-'+shelf}
            shelf={shelf} />
        </figure>
      )}
    </section>
  )
}

BookShelfSelection.propTypes = {
  className: PropTypes.string,
  bookShelf: PropTypes.string,
  onSelectShelf : PropTypes.func,
}

BookShelfSelection.defaultProps = {
  className: '',
  bookShelf: '',
  onSelectShelf: () => {},
}

export default BookShelfSelection
