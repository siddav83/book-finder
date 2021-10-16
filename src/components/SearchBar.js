import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
  state = { term: "" }

  onSubmitSearch = (event) => {
    event.preventDefault()
    this.props.seachedTerm(this.state.term)

  }


  render() {
    return(
      <div className="search-bar">
        <form className="ui form"
        onSubmit={this.onSubmitSearch}
        >
          <div className="ui icon input">

             <i className="search icon"></i>
            <input
            id="search"
            placeholder="Search something like Moby Dick"
             type="text"
             value={this.state.term}
             onChange={(e)=>this.setState({term: e.target.value})}/>
          </div>
        </form>
      </div>
      )
  };
};

export default SearchBar;

/*<div class="ui icon input">
  <input type="text" placeholder="Search...">
  <i class="search icon"></i>
</div>*/
