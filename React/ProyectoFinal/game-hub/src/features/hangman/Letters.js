import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { checkLetter, selectUsed } from "./HangmanSlice";

import "./Letters.css";

const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

export function Letters() {
    
    const used = useSelector(selectUsed);

    const dispatch = useDispatch();

    return (
        <div className="letter__container">
            {letters.map((letter) => {
                return <button disabled={used.includes(letter)} key={letter} className="letter__button" onClick={() => dispatch(checkLetter(letter))}> {letter.toUpperCase()} </button>;
            })}
        </div>
    );
}
