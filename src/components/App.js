import React from 'react';
import SearchBar from './SearchBar';
import googlebook from '../api/googlebook';
import BookList from './BookList';
import BookItem from './BookItem';

class App extends React.Component {
  state = { books: [] }

seachedTerm = (term) => {
  googlebook.get("/search", {
    params: {
      q: term
    }}).then(response => this.setState({ books: response.data.items })
)}
  render() {
    return(
      <div className="ui container">
        <SearchBar seachedTerm={this.seachedTerm} />
        <BookList books={this.state.books} />
        <BookItem />
      </div>
      )
  }
}

export default App;


