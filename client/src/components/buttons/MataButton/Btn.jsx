import React from 'react';
import './Btn.scss'
const Btn = ({title, type, color, width, right, doAction, disabled}) => (
  <button
    type={type}
    className={`btn ${color ? color : ''} ${width ? width : ''} ${right ? 'right' : ''}`}
    onClick={doAction}
    disabled={disabled}
  >
    {title}
  </button>
);

export default Btn;