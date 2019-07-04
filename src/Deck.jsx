import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './main.css';

class Deck extends Component {
  render() {
    return (
      <div className="deckbuttons">
        <div className="title">{this.props.title}</div>
        <div className="bottom">
          <Button className="playbutton">
            <Link to={`/quiz/${this.props.id}`}>PLAY</Link>
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  decks: state.decks,
});

export default connect(mapStateToProps)(Deck);
