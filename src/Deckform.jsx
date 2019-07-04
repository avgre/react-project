import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MyNavbar } from './Navbar.jsx';

import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

class DeckForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      title: '',
      cards: [],
      newCardQuestion: [],
      newCardChoices: [],
      answer: 0,
    };
  }

  handleAddTitle = (evt) => {
    this.setState({ title: evt.target.value });
  };

  handleAddID = () => {
    this.setState({ id: this.props.decks.length });
  };

  handleAddQuestion = (evt) => {
    this.setState({ newCardQuestion: [evt.target.value] });
  };

  handleAddChoice = () => {
    this.setState({ newCardChoices: [...this.state.newCardChoices, ''] });
  };

  handleRemoveChoice = (index) => {
    this.state.newCardChoices.splice(index, 1);
    this.setState({ newCardChoices: this.state.newCardChoices });
  };

  handleFieldChange = (e, index) => {
    this.state.newCardChoices[index] = e.target.value;
    this.setState({ newCardChoices: this.state.newCardChoices });
  };
  handleAnswerCheckbox = (index) => {
    this.setState({ answer: index });
  };
  handleCreateCard = () => {
    const newCard = {
      choices: this.state.newCardChoices,
      question: this.state.newCardQuestion,
      answer: this.state.answer,
    };
    this.setState((prevState) => ({
      cards: [...prevState.cards, newCard],
    }));
    this.setState({ newCardChoices: [] });
    this.setState({ newCardQuestion: [] });
    this.setState({ answer: 0 });
  };
  handleCreateDeck = () => {
    const newDeck = {
      id: this.state.id,
      title: this.state.title,
      cards: this.state.cards,
    };
    return newDeck;
  };
  handleAddDeck = () => {
    this.props.dispatch({
      type: 'ADDDECK',
      payload: this.handleCreateDeck(),
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.handleAddDeck();
    console.log(this.props.decks);
    // Reset form on submission
    this.state = {
      id: 0,
      title: '',
      cards: [],
      newCardQuestion: [],
      newCardChoices: [],
    };
  };

  render() {
    return (
      <div>
        <MyNavbar />
        <Form onSubmit={this.handleSubmit}>
          <div>CREATE A DECK</div>
          <div>
            <label>
              Title:
              <input onChange={this.handleAddTitle} value={this.state.title} />
            </label>
          </div>
          <div>
            <label>
              Question {this.state.currentQuesIndex}:
              <input
                onChange={this.handleAddQuestion}
                value={this.state.newCardQuestion}
              />
            </label>
          </div>

          <div>
            {this.state.newCardChoices.map((choice, index) => {
              return (
                <div key={index}>
                  <label>
                    Choice {index}:
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox
                          onChange={(e) => {
                            this.handleAnswerCheckbox(index);
                          }}
                        />
                      </InputGroup.Prepend>
                      <FormControl
                        onChange={(e) => {
                          this.handleFieldChange(e, index);
                        }}
                        value={choice}
                        aria-label="Text input with checkbox"
                      />
                      <InputGroup.Append>
                        <button
                          onClick={() => {
                            this.handleRemoveChoice(index);
                          }}
                          variant="outline-secondary"
                        >
                          Remove
                        </button>
                      </InputGroup.Append>
                    </InputGroup>
                  </label>
                </div>
              );
            })}
          </div>
          <div>
            <div>
              <Button
                onClick={() => {
                  this.handleAddChoice();
                }}
              >
                Add Choice
              </Button>
            </div>
          </div>
          <Button
            onClick={(e) => {
              this.handleCreateCard(e);
            }}
            variant="outline-secondary"
          >
            ADD CARD
          </Button>
          <Button
            onClick={() => {
              this.handleAddID();
            }}
            type="submit"
          >
            SUBMIT
          </Button>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  decks: state.decks,
});

export default connect(mapStateToProps)(DeckForm);
