import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home.jsx';
import Quiz from './Quiz.jsx';
import Deckform from './Deckform';
import './main.css';

const renderHome = () => {
  return <Home />;
};

const renderResults = () => {
  return <ResultPage />;
};

const renderQuiz = (routeProps) => {
  return <Quiz match={routeProps.match} />;
};

const renderDeckForm = () => {
  return <Deckform />;
};

class App extends Component {
  renderHome = () => {
    return renderHome();
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={this.renderHome} />
          <Route exact={true} path="/quiz/:id" render={renderQuiz} />
          <Route exact={true} path="/quiz/results" render={renderResults} />
          <Route exact={true} path="/createdeck" render={renderDeckForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
