import React from 'react';
import { WORD_LENGTH } from '../../constants';

function GuessInput({ handleAddGuess, isEnabled }) {
  const [guessTerm, setGuessTerm] = React.useState('');

  function handleChange(e) {
    setGuessTerm((e.target.value).toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (guessTerm.length === WORD_LENGTH)
      handleAddGuess(guessTerm);   
    setGuessTerm('');
  }

  return (
    <form className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input
        type="text"
        id="guess-input"
        value={guessTerm}
        onChange={handleChange}
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        pattern="^[A-Z]{5,5}$"
        title="Please submit a 5-letter word only!"
        disabled={!isEnabled}
      />
    </form>
  );
}

export default GuessInput;
