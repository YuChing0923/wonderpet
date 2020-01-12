import React from 'react';
import Elements from '../Elements/Elements';

const AddNumber = ({ start, dimension, resultNum, handleInputChange, addResults, results, btnOnClick, btnText }) => (
    <div
    className="add_number"
    style={{
        display: (start) ? 'block' : 'none'
    }}>
        <Elements.Input
        type="number"
        min="1"
        max={dimension*dimension}
        resultNum={resultNum}
        handleInputChange={handleInputChange}
        />
        <Elements.Button
        onClick={btnOnClick}
        text={btnText}
        />
        <p
        style={{
          display: ((results.length > 0) && ((resultNum <= 0) || (resultNum > (dimension * dimension)))) ? 'block' : 'none',
          color: 'red'
        }}>
        {`請輸入介於1~${(dimension * dimension)}的數字`}
        </p>
    </div>
)

export default AddNumber;