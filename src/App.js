import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { getSecretWord } from './actions';
import './App.css';

class App extends Component {
  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input success={success} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return {
    guessedWords,
    secretWord,
    success,
  }
}

export default connect(mapStateToProps, { getSecretWord })(App);
