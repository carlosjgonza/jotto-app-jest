import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSecretWord, resetGame } from './actions';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is false)
 */
export class UnconnectedCongrats extends Component {
  handleReset = () => {
    const { getSecretWord, resetGame } = this.props;
    resetGame();
    getSecretWord();
  }
  render() {
    const { secretWord, success, resetGame } = this.props;
    return (
      success ? <div data-test="component-congrats" className="alert alert-success">
        <div className="row">
          <span data-test="congrats-message">
            You got it! The secret word is { secretWord }
          </span>
        </div>
        <div className="row">
          <button
            data-test="congrats-button"
            className="btn btn-primary"
            onClick={this.handleReset}
            type="button"
          >
            New Word
          </button>
        </div>
      </div> : <div data-test="component-congrats" />
    );
  }
};

UnconnectedCongrats.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  resetGame: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  secretWord: PropTypes.string,
};

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return {
    guessedWords,
    secretWord,
    success,
  }
}

export default connect(mapStateToProps, { resetGame, getSecretWord })(UnconnectedCongrats);