/**
 * @method getLetterMatchCount
 * @param {string} guessWord - Guessed word
 * @param {string} secretWord - Secret word
 * @returns {number} - Number of letters matched between guessed word and secret word.
 */
export const getLetterMatchCount = (guessWord, secretWord) => {
  const secretLetters = secretWord.split('');
  const guessedLetterSet = new Set(guessWord);
  return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
};
