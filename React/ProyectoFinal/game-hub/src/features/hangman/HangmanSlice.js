import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wordsList: ['Álava', 'Albacete','Alicante','Almería', 'Asturias','Ávila','Badajoz','Barcelona','Burgos','Cáceres','Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara','Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona','Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'],
    isStarted: false,
    guessWord: [],
    clue: [],
    attemps: 5,
    history: []
};

export function random(array) {
    let number = Math.floor(Math.random() * array.length);
    return number
}

export const HangmanSlice = createSlice({
    name: 'hangman',
    initialState,
    reducers: {
    start: (state) => {
        state.isStarted = true;
        let random = Math.floor(Math.random() * state.wordsList.length);
        state.guessWord = state.wordsList[random];
        for (let i = 0; i < state.guessWord.length; i++) {
            state.clue.push(' _ ');
        }
    },
    end: (state) => {
        state.isStarted = false;
        state.guessWord = [];
        state.clue = [];
        state.attemps = 5;
        state.history = [];
    },
    checkLetter: (state, action) => {
        var indices = []
        var idx = state.guessWord.indexOf(action.payload);
        console.log(idx);
        while (idx !== -1) {
            indices.push(idx);
            idx = state.guessWord.indexOf(action.payload, idx + 1);
        }
        for (let i = 0; i < indices.length; i++) {
            state.clue[indices[i]] = action.payload.toUpperCase();
        }
        if(indices.length === 0){
            state.attemps -= 1;
            state.history.push(action.payload);
        }
    },
}
});

export const { start, end, checkLetter } = HangmanSlice.actions;

export const selectStart = (state) => state.hangman.isStarted;
export const selectWord = (state) => state.hangman.guessWord;
export const selectClue = (state) => state.hangman.clue;
export const selectAttemps = (state) => state.hangman.attemps;
export const selectHistory = (state) => state.hangman.history;

export default HangmanSlice.reducer;
