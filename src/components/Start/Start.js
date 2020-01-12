import React from 'react';
import Elements from '../Elements/Elements';

const Start = ({ btnOnClick, btnText }) => (
    <div className="start_btn">
        <Elements.Button
        onClick={btnOnClick}
        text={btnText}
        />
    </div>
)

export default Start;