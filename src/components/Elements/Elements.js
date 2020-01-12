import React from 'react';

const Button = ({ className, onClick, text }) => (
    <button
    className={className}
    onClick={onClick}>
    {text}
    </button>
)

const Input = ({type, min, max, resultNum, handleInputChange}) => (
    <input
    type={type}
    className="form_control"
    min={min}
    max={max}
    value={resultNum}
    onChange={handleInputChange} />
)

const BingoDiv = ({ index, results, num }) => (
    <div
    className={`bingo_div ${(results.includes(num)) ? 'result' : ''}`}>
    {num}
    </div>
)

export default {
    Button,
    Input,
    BingoDiv
};