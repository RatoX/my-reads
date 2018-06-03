import './BookShelfSelection.css'
import React from 'react'
import ShelfIcon from './ShelfIcon'

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
            className={iconClassName + ' ' + iconClassName+'-'+shelf }
            shelf={shelf}>
          </ShelfIcon>
        </figure>
      )}
    </section>
  )
}

export default BookShelfSelection
