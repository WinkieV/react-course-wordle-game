import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessedWords, setGuessedWords] = React.useState([]);

  function handleAddGuess(word) {
    setGuessedWords([...guessedWords, word]);
  }

  const guessCount   = guessedWords.length;
  const gameWin = 0 < guessCount && guessedWords[guessCount-1].toUpperCase() === answer.toUpperCase(); // CAND
  const gameLost = guessCount === NUM_OF_GUESSES_ALLOWED && !gameWin;

  return (
    <>
    <GuessResults guessedWords={guessedWords} answer={answer} />
    <GuessInput handleAddGuess={handleAddGuess} isEnabled={!(gameWin || gameLost)}/>
    { gameWin
        ? <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong> {guessCount} guesses</strong>.
            </p>
          </div>
        : <></>
    }
    {
      gameLost
        ? <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          </div>
        : <></>
    }
    </>
  );
}

export default Game;
