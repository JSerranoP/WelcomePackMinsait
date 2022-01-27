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
                <h1 className="main__title">3 EN RAYA</h1>
                <button className="main__button main__button--not-animated" onClick={() => dispatch(end())}>Dejar de jugar</button>
                <h4 className="main__subtitle">Es el turno de <label className="main__subtitle--bold">{turn}</label>  </h4>
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
