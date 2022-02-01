import React from "react";
import { useSelector } from "react-redux";

import { selectClue, selectAttemps, selectHistory } from "./HangmanSlice";

import "./Game.css";
import { Letters } from "./Letters";

export function Game() {

    const clue = useSelector(selectClue);
    const attemps = useSelector(selectAttemps);
    const history = useSelector(selectHistory);

    return (
        <div className="game__container">
            <h2 className="game__title"> Intentos restantes: {attemps} </h2>
            <h4 className="game__subtitle1"> {clue} ( {clue.length} )</h4>
            <Letters/>
            <h4 className="game__subtitle2"> Letras erróneas:  {history} </h4>
        </div>
    );
}
