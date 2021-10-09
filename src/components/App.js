import React from 'react';
import SearchBar from './SearchBar';
import googlebook from '../api/googlebook';

class App extends React.Component {

seachedTerm = (term) => {
  googlebook.get("/search", {
    params: {
      q: term,
    }
    })
}
  render() {
    return(
      <div className="ui container">
        <SearchBar seachedTerm={this.seachedTerm} />
      </div>
      )
  }
}

export default App;


