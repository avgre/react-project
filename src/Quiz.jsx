import { connect } from 'react-redux';
import React, { Component } from 'react';
import { MyNavbar } from './Navbar.jsx';
import './main.css';
import ResultPage from './ResultPage.jsx';

class Questions extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       currentQuesIndex: 0,
  //     };
  //   }2
  answerButton = (answerIdx) => {
    // this.setstate({ currentQuesIndex: this.state.currentQuesIndex + 1 });
    this.props.dispatch({
      type: 'ANSWER',
      value: answerIdx,
    });
  };
  render() {
    const currentCard = this.props.deck.cards[this.props.answers.length];
    return this.props.answers.length < this.props.deck.cards.length ? (
      <>
        <div>Question: {currentCard.question}</div>
        <div>
          Answers:
          {currentCard.choices.map((answer, idx) => (
            <button onClick={() => this.answerButton(idx)}>{answer}</button>
          ))}
        </div>
      </>
    ) : (
      <ResultPage answers={this.props.answers} deck={this.props.deck} />
    );
  }
}

class Quiz extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <Questions
          deck={this.props.deck}
          answers={this.props.answers}
          dispatch={this.props.dispatch}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const selectedDeck = state.decks.find((deck) => {
    return deck.id === Number(ownProps.match.params.id);
  });
  return { deck: selectedDeck, answers: state.answers };
};

export default connect(mapStateToProps)(Quiz);
