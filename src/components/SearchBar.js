import React from 'react';

class SearchBar extends React.Component {
  state = { term: "" }

  onSubmitSearch = (e) => {
    e.preventDefault()
    this.props.seachedTerm(e)

  }


  render() {
    return(
      <div>
        <form className="ui form"
        onSubmit={this.onSubmitSearch}
        >
          <div className="field">
            <label>User Input</label>
            <input
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
