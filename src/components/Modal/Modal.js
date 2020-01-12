import React from 'react';
import Elements from '../Elements/Elements';

const Modal = ({ win, gameStart }) => (
    <div id="modal"
    style={{
      display: (win >= 4) ? 'block' : 'none'
    }}>
        <p className="over">遊戲結束</p>
        <Elements.Button
        onClick={gameStart}
        text="restart"
        className="control_button"
        />
    </div>
)

export default Modal;