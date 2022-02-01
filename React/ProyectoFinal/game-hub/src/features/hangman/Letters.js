import React from "react";
import { useDispatch } from "react-redux";

import { checkLetter } from "./HangmanSlice";

import "./Letters.css";

const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

export function Letters() {
    
    const dispatch = useDispatch();

    return (
        <div className="letter__container">
            {letters.map((letter) => {
                return <button key={letter} className="letter__button" onClick={() => dispatch(checkLetter(letter))}> {letter.toUpperCase()} </button>;
            })}
        </div>
    );
}
