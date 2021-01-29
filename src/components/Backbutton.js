import React from 'react';
import sheet from './BackButton.module.css';

const Backbutton = ({onClick}) => {
    return (
        <button className={sheet.btn} onClick={() => onClick()}>
            <span className='material-icons'>keyboard_backspace</span>
            <span>Back to search</span>
        </button>
    );
}

export default Backbutton;
