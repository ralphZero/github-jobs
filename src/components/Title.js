import React from 'react';
import sheet from './Header.module.css';

const Title = () => {
    return (
        <div className={sheet.titleContainer}>
            <span className={sheet.github}>Github</span>
            <span className={sheet.jobs}>Jobs</span>
        </div>
    );
}

export default Title;
