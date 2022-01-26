import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ],
    isStarted: false,
    turn: 'X',
    winner: false,
    draw: false
};

export const TicTacToeSlice = createSlice({
  name: 'tictactoe',
  initialState,
  reducers: {
    start: (state) => {
      state.isStarted = true;
    },
    place: (state, action) => {
      if(state.turn === 'X' && state.board[action.payload[0]][action.payload[1]] === null) {
        state.board[action.payload[0]][action.payload[1]] = 'X';
        state.turn = 'O';
      } else {
        if (state.board[action.payload[0]][action.payload[1]] === null) {
          state.board[action.payload[0]][action.payload[1]] = 'O';
          state.turn = 'X';
        }
      }
    },
    end: (state) => {
      state.isStarted = false;
      state.board = initialState.board;
    },
  },
});

export const { start, place, end } = TicTacToeSlice.actions;

export const selectBoard = (state) => state.tictactoe.board;
export const selectStart = (state) => state.tictactoe.isStarted;
export const selectTurn = (state) => state.tictactoe.turn;
export const selectWinner = (state) => state.tictactoe.winner;
export const selectDraw = (state) => state.tictactoe.draw;

export default TicTacToeSlice.reducer;
