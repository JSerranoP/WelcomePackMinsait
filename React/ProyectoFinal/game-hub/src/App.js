import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Counter } from './features/counter/Counter';
import { Home } from './components/Home/Home';

import './App.css';
import InConstruction from './components/InConstruction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/counter' element={<Counter/>} />
        <Route path='/tictactoe' element={<Counter/>} />
        <Route path='/hangman' element={<InConstruction/>} />
        <Route path='/sudoku' element={<InConstruction/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
