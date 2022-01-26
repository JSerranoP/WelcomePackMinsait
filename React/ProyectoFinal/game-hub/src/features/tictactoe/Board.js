import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { place, selectBoard } from "./TicTacToeSlice";

import "./Board.css";

export function Board() {

    const board = useSelector(selectBoard);

    const dispatch = useDispatch();
    return (
        <div className="board__container">
            <button className="board__button" onClick={() => dispatch(place([0,0]))}> {board[0][0]} </button>
            <button className="board__button" onClick={() => dispatch(place([0,1]))}> {board[0][1]} </button>
            <button className="board__button" onClick={() => dispatch(place([0,2]))}> {board[0][2]} </button>
            <button className="board__button" onClick={() => dispatch(place([1,0]))}> {board[1][0]} </button>
            <button className="board__button" onClick={() => dispatch(place([1,1]))}> {board[1][1]} </button>
            <button className="board__button" onClick={() => dispatch(place([1,2]))}> {board[1][2]} </button>
            <button className="board__button" onClick={() => dispatch(place([2,0]))}> {board[2][0]} </button>
            <button className="board__button" onClick={() => dispatch(place([2,1]))}> {board[2][1]} </button>
            <button className="board__button" onClick={() => dispatch(place([2,2]))}> {board[2][2]} </button>
        </div>
    );
}
