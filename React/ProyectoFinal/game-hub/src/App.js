import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Counter } from './features/counter/Counter';
import { Home } from './components/Home/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/counter' element={<Counter/>} />
        <Route path='/tictactoe' element={<Counter/>} />
        <Route path='/hangman' element={<Counter/>} />
        <Route path='/sudoku' element={<Counter/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
