export function checkGuess(guess, answer) {
  const MATCH_CHAR = '*';

  // phase 1: find positional matches
  let ok = []; // positional match?
  let ans = answer.split(''); // current answer (updated to exclude positional matches)
  for (let i = 0; i < ans.length; i++) {
    const match = i < guess.length && guess[i] === answer[i]; // CAND
    ok.push(match);
    if (match)
      ans[i] = MATCH_CHAR; // prevent finding again
  }

  // phase 2: any (mis)matches
  let res = [];
  for (let i = 0; i < ans.length; i++) {
    if (guess.length <= i) {
      res.push('');
      continue;
    }

    // at correct position?
    if (ok[i]) {
      res.push('correct');
      continue;
    }

    // letter present at another position?
    if (ans.includes(guess[i])) {
      res.push('misplaced');
      continue;
    }

    // letter not present
    res.push('incorrect');
  }

  return res;
}