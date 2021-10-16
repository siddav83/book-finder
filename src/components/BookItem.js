import React from 'react';

const BookItem = ({book}) => {
  if(!book) {
   return <div>Loading...</div>
  }
return(
  <div className="ui relaxed horizontal list">
    <div className="item">
      <div className="ui image">
      <a href={book.volumeInfo.infoLink}>
        <img src={book.volumeInfo.imageLinks.thumbnail}/>
        </a>
   </div>
   </div>
  </div>
  )
};


export default BookItem
