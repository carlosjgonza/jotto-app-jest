import React from 'react';
import GuessedWords from './GuessedWords';
import './App.css';

function App() {
  const guessedWordsTest = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 }
  ];
  return (
    <div className="App">
      <GuessedWords guessedWords={guessedWordsTest} />
    </div>
  );
}

export default App;
