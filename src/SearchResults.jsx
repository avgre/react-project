import { connect } from 'react-redux';
import React, { Component } from 'react';

class UnconnectedSearchResults extends Component {
  render = () => {
    const results = this.props.decks.filter((deck) => {
      if (deck.title.includes(this.props.searchQuery)) {
        return deck;
      }
    });
    return (
      <div>
        {results.map((r) => {
          return <Deck title={r.title} id={r.id} />;
        })}
      </div>
    );
  };
}
const mapStateToProps = (st) => {
  return {
    decks: st.decks,
    query: st.searchQuery,
  };
};
const SearchResults = connect(mapStateToProps)(UnconnectedSearchResults);
export default SearchResults;
