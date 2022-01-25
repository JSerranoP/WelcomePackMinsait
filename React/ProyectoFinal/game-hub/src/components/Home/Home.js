import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

export const Home = () => {
    return (
        <div className='home__container'>
            <div className='home__container-games'>
                <Link className='home__link' to="/tictactoe"><img className='home__image' src='https://cs8.pikabu.ru/avatars/1042/x1042055-1251797265.png' alt='tictactoe'></img>TicTacToe</Link>
                <Link className='home__link' to="/hangman"><img className='home__image' src='http://assets.stickpng.com/thumbs/5e9d98460ac2570004498cca.png' alt='hangman'></img>Hangman</Link>
                <Link className='home__link' to="/sudoku"><img className='home__image' src='https://www.ajedrezeureka.com/wp-content/uploads/thumbs/custom/S/sudoku.png' alt='sudoku'></img>Sudoku</Link>
            </div>
        </div>
    );
};