import React, { Component } from 'react';

class NumberGuess extends Component {
  render() {
    const { countWords } = this.props;
    return (
      <div data-test='component-number-guess'>
        <label data-test='label-number-guess'>
          Total Guesses: {countWords}
        </label>
      </div>
    );
  }
}

export default NumberGuess;