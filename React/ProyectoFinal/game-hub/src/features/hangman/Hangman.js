import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { start, end, selectStart } from "./HangmanSlice";

import "./Hangman.css";
import { Game } from "./Game";

export function Hangman() {

    const isStarted = useSelector(selectStart);

    const dispatch = useDispatch();

    if (isStarted) {
        return (
            <div className="main__container">
                <h1 className="main__title">HANGMAN</h1>
                <button className="main__button main__button--not-animated" onClick={() => dispatch(end())}>Terminar partida</button>
                <Game/>
            </div>
        );
    } else {
        return (
            <div className="main__container">
                <h1 className="main__title">HANGMAN</h1>
                <button className="main__button" onClick={() => dispatch(start())}>¡Empezar a jugar!</button>
            </div>
        );
    }
}
