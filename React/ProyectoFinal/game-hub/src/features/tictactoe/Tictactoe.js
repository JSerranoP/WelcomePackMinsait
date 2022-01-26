import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { start, end, selectStart, selectTurn } from "./TicTacToeSlice";

import "./Tictactoe.css";
import { Board } from "./Board";

export function Tictactoe() {

    const isStarted = useSelector(selectStart);
    const turn = useSelector(selectTurn);

    const dispatch = useDispatch();
    if (isStarted) {
        return (
            <div className="main__container">
                <h1 className="main__title">3 en Raya</h1>
                <button className="main__button" onClick={() => dispatch(end())}>Dejar de jugar</button>
                <p>Es el turno de {turn} </p>
                <Board/>
            </div>
        );
    } else {
        return (
            <div className="main__container">
                <h1 className="main__title">3 en Raya</h1>
                <button className="main__button" onClick={() => dispatch(start())}>¡Empezar a jugar!</button>
            </div>
        );
    }
}
