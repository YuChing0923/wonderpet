import React from 'react';
import Elements from '../Elements/Elements';

const Bingo = ({ dimension, numbers, results }) => (
    <div
    className="bingo_block"
    style={{
        width: 56 * dimension,
        height: 56 * dimension
    }}>
        {numbers.map( (num, index) => (
            <Elements.BingoDiv
            num={num}
            index={index}
            results={results}
            key={index + 1}
            />
        ))}
    </div>
)

export default Bingo;