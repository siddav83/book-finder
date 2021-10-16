import React from 'react';
import SearchBar from './SearchBar';
import googlebook from '../api/googlebook';
import BookList from './BookList';
import BookItem from './BookList';
import books from "../images/books.jpg";


class App extends React.Component {
  state = { books: [] }

seachedTerm = async term => {
  const response = await googlebook.get("/search", {
    params: {
      q: term
    }})
  this.setState({ books: response.data.items })
}

  render() {
    return(

        <div className="ui container" style={{ backgroundImage: `url(${books})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5" }}>
          <SearchBar seachedTerm={this.seachedTerm} />
          <BookList books={this.state.books} />
          {/*<BookItem />*/}

        </div>
      )
  }
}

export default App;


