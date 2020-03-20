import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { getSecretWord } from './actions';
import './App.css';

export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    const { getSecretWord } = this.props;
    getSecretWord();
  };
  render() {
    const { secretWord, success, guessedWords } = this.props;
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {secretWord}</div>
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

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
