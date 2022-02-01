import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home/Home';
import InConstruction from './components/InConstruction';
import Footer from './components/Footer';
import Header from './components/Header/Header';

import './App.css';
import { Tictactoe } from './features/tictactoe/Tictactoe';
import { Hangman } from './features/hangman/Hangman';


function App() {
  return (
    <Router>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path='/tictactoe' element={<Tictactoe/>} />
          <Route path='/hangman' element={<Hangman/>} />
          <Route path='/sudoku' element={<InConstruction/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
