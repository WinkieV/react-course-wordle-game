import React from 'react';
import { range } from '../../utils';
import { WORD_LENGTH } from '../../constants';
import { checkGuess } from '../../word-match-checker'; // Using my own word checker routine :)

function Guess({ word, answer }) {
  const statusPerLetter = checkGuess(word, answer);

  return (
    <p className="guess">
      {
        range(WORD_LENGTH).map(index => (
          <span key={index} className={`cell ${statusPerLetter[index]}`}>{index<word.length ? word[index] : ''}</span>
        ))
      }
    </p>
  );
}

export default Guess;
