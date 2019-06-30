import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { initialDecks } from './data.js';
import './main.css';

class Deck extends Component {
  render() {
    return (
      <div className="deck">
        <div>{this.props.title}</div>
        <div>
          <Link to={'/quiz/' + this.props.deckId}>PLAY</Link>
        </div>
      </div>
    );
  }
}

class MyNavbar extends Component {
  render() {
    return (
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand href="#home">GOT IT!</Navbar.Brand>
        <Navbar.Collapse>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Create Deck</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
const renderHome = (initialDecks) => {
  return (
    <div>
      <MyNavbar />
      <ul>
        {initialDecks.map((deck) => (
          <li>
            <Link to={`/quiz/${deck.id}`}>{deck.title}</Link>
          </li>
        ))}
      </ul>
      {initialDecks.map((deck) => (
        <Deck title={deck.title} />
      ))}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path="/" render={this.renderHome} />
        <Route exact={true} path="/quiz/:Did" render={this.renderQuiz} />
        <Route
          exact={true}
          path="/details/:itemId"
          render={this.renderItemDetails}
        />
      </div>
      <Route
        exact={true}
        path="/reviewer/:reviewerId"
        render={renderReviewer}
      />
    </BrowserRouter>
  );
}

export default App;
