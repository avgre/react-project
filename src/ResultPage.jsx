import { connect } from 'react-redux';
import React, { Component } from 'react';
import './main.css';

class ResultPage extends Component {
  componentWillUnmount() {
    this.props.dispatch({
      type: 'resetANS',
      payload: [],
    });
  }
  render() {
    return (
      <div>
        <h1>Results: </h1>
        {this.props.deck.cards.map((card, idx) => (
          <div>
            <h3>Question : {card.question}</h3>
            <h4>Answer : {card.choices[card.answer]}</h4>
            <h4 className="result">
              Your Answer : {card.choices[this.props.answers[idx]]}
            </h4>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ResultPage);
