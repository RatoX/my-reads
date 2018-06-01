import './BookShelfSelection.css';
import React from 'react';
import ShelfIcon from './ShelfIcon';

function BookShelfSelection ({ className, bookShelf }) {
  const bookShelfSelectionClassName = `book-shelf-selection ${className}`
  const iconClassName = 'book-shelf-selection__icon'
  const shelfList = ['currentlyReading', 'wantToRead', 'read']

  return (
    <section className={bookShelfSelectionClassName}>
      { shelfList.map((shelf) =>
        <ShelfIcon
          key={shelf}
          className={iconClassName + ' ' + iconClassName+'-'+shelf }
          shelf={shelf}>
        </ShelfIcon>
      )}
    </section>
  )
}


export default BookShelfSelection
