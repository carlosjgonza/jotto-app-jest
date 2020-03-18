import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  const { guessedWords } = props;
  return (
    <div data-test="component-guessed-words">
      {
        guessedWords.length === 0 ?
        <span data-test="guess-instructions">Try to guess the secret word!</span> :
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table>
            <thead>
              <tr>
                <th>Guessed Word</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {
                guessedWords.map((guessedWord, key) => (
                  <tr
                    data-test="guessed-word"
                    key={`word-${key}`}
                  >
                    <td>
                      { guessedWord.guessedWord }
                    </td>
                    <td>
                      { guessedWord.letterMatchCount }
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;