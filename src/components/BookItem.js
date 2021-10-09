import React from 'react';

const BookItem = (book) => {
console.log(book.book.searchInfo)
  return(
    <div className="ui items">
      <div className="item">
      <img src=""/>
        <div className="middle aligned content">
          <div className="header">book.volumeInfo.title</div>
        </div>
      </div>
    </div>
    )
}

export default BookItem;
