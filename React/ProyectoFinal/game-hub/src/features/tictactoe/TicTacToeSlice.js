import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ],
    isStarted: false,
    turn: 'X',
    endedGame: false,
    counter: 0
};

export const TicTacToeSlice = createSlice({
  name: 'tictactoe',
  initialState,
  reducers: {
    start: (state) => {
      state.isStarted = true;
    },
    play: (state, action) => {
      if(state.turn === 'X' && state.board[action.payload[0]][action.payload[1]] === null && state.endedGame === false) {
        state.board[action.payload[0]][action.payload[1]] = 'X';
        state.turn = 'O';
        state.counter += 1;
      } else {
        if (state.board[action.payload[0]][action.payload[1]] === null && state.endedGame === false) {
          state.board[action.payload[0]][action.payload[1]] = 'O';
          state.turn = 'X';
          state.counter += 1;
        }
      }
    },
    end: (state) => {
      state.isStarted = false;
      state.board = initialState.board;
      state.turn = 'X';
      state.endedGame = false;
      state.counter = 0;
    },
    checkWinner: (state) => {
      // Jugador X
      // horizontal
      if (state.board[0][0] === 'X' && state.board[0][1] === 'X' && state.board[0][2] === 'X') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador X!');
      } else if (state.board[1][0] === 'X' && state.board[1][1] === 'X' && state.board[1][2] === 'X') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador X!');
      } else if (state.board[2][0] === 'X' && state.board[2][1] === 'X' && state.board[2][2] === 'X') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador X!');
      } 
      // vertical
      else if (state.board[0][0] === 'X' && state.board[1][0] === 'X' && state.board[2][0] === 'X') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador X!');
      } else if (state.board[0][1] === 'X' && state.board[1][1] === 'X' && state.board[2][1] === 'X') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador X!');
      } else if (state.board[0][2] === 'X' && state.board[1][2] === 'X' && state.board[2][2] === 'X') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador X!');
      } 
      // diagonal
      else if (state.board[0][0] === 'X' && state.board[1][1] === 'X' && state.board[2][2] === 'X') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador X!');
      } else if (state.board[0][2] === 'X' && state.board[1][1] === 'X' && state.board[2][0] === 'X') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador X!');
      } 
      // Jugador O
      // horizontal
      else if (state.board[0][0] === 'O' && state.board[0][1] === 'O' && state.board[0][2] === 'O') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador O!');
      } else if (state.board[1][0] === 'O' && state.board[1][1] === 'O' && state.board[1][2] === 'O') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador O!');
      } else if (state.board[2][0] === 'O' && state.board[2][1] === 'O' && state.board[2][2] === 'O') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador O!');
      } 
      // vertical
      else if (state.board[0][0] === 'O' && state.board[1][0] === 'O' && state.board[2][0] === 'O') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador O!');
      } else if (state.board[0][1] === 'O' && state.board[1][1] === 'O' && state.board[2][1] === 'O') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador O!');
      } else if (state.board[0][2] === 'O' && state.board[1][2] === 'O' && state.board[2][2] === 'O') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador O!');
      } 
      // diagonal
      else if (state.board[0][0] === 'O' && state.board[1][1] === 'O' && state.board[2][2] === 'O') {
        state.endedGame = true;
        
        alert('¡Ha ganado el jugador O!');
      } else if (state.board[0][2] === 'O' && state.board[2][1] === 'O' && state.board[2][0] === 'O') {
        state.endedGame = true;
        alert('¡Ha ganado el jugador O!');
      }
    },
    checkDraw: (state) => {
      if(state.counter === 9 && state.endedGame === false) {
        alert('Ha habido un empate, ¿quieres volver a jugar?');
      }
    },
  }
});

export const { start, play, end, checkWinner, checkDraw } = TicTacToeSlice.actions;

export const selectBoard = (state) => state.tictactoe.board;
export const selectStart = (state) => state.tictactoe.isStarted;
export const selectTurn = (state) => state.tictactoe.turn;

export default TicTacToeSlice.reducer;
