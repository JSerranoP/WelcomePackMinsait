import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tictactoeReducer from '../features/tictactoe/TicTacToeSlice';
import hangmanReducer from '../features/hangman/HangmanSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tictactoe: tictactoeReducer,
    hangman: hangmanReducer
  },
});
