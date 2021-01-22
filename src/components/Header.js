import React from 'react'
import sheet from './Header.module.css';
import bgImg from '../media/backgroundImg.png';
import Title from './Title';

const Header = () => {
    const inputContainerStyle = {
        background: `url(${bgImg})`,
        backgroundSize: 'cover',
        borderRadius: '8px'
    }
    return (
        <header>
            <Title />
            <div style={inputContainerStyle} className={sheet.inputContainer}>
                <div className={sheet.inputGroup}>
                    <span className={`${sheet.icon} material-icons`}>work_outline</span>
                    <input className={sheet.input} placeholder='Title, companies, expertise or benefits' type="text"/>
                    <button className={sheet.button}>Search</button>
                </div>
            </div>
        </header>
    )
}
export default Header
