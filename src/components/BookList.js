import React from 'react';
import BookItem from './BookItem'

const BookList = ({books}) => {
  const bookSelected = books.map((book) => {
    return <BookItem book={book} />;
})

  return(
    <div>
     {bookSelected}
    </div>
  )
}


export default BookList;
