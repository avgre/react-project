import { connect } from 'react-redux';
import React, { Component } from 'react';
import { MyNavbar } from './Navbar.jsx';
import Deck from './Deck.jsx';
import './main.css';
import SearchResults from './SearchResults.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <div>
          {this.props.decks.map((deck) => (
            <Deck title={deck.title} id={deck.id} />
          ))}
          <SearchResults />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state.decks,
});

export default connect(mapStateToProps)(Home);
