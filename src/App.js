import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import { getSecretWord } from './actions';
import './App.css';

class App extends Component {
  render() {
    const guessedWordsTest = [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "agile", letterMatchCount: 1 }
    ];
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={guessedWordsTest} />
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
