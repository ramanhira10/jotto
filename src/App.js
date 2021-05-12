import { useEffect } from 'react';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { getSecretWord } from './actions';

const App = () => {
  //TODO: get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessWords = [];

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div className='container' data-test='component-app'>
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessWords} />
    </div>
  );
};

export default App;
