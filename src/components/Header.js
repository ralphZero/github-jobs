import React, { useContext, useState } from 'react'
import sheet from './Header.module.css';
import bgImg from '../media/backgroundImg.png';
import Title from './Title';
import { JobContext } from '../contexts/JobContext';

const Header = () => {
    const inputContainerStyle = {
        background: `url(${bgImg})`,
        backgroundSize: 'cover',
        borderRadius: '8px'
    }

    const { dispatch } = useContext(JobContext);

    const [query, setQuery] = useState('');

    const handleTextChange = (e) => {
        if(e.keyCode === 13) {
            dispatch({type: 'UPDATE_QUERY', value: query});
        }
    }

    return (
        <header>
            <Title />
            <div style={inputContainerStyle} className={sheet.inputContainer}>
                <div className={sheet.inputGroup}>
                    <span className={`${sheet.icon} material-icons`}>work_outline</span>
                    <input className={sheet.input} placeholder='Title, companies, expertise or benefits' value={query} onChange={(e) => setQuery(e.currentTarget.value)} onKeyUp={(e) => handleTextChange(e)} type="text"/>
                    <button onClick={() => dispatch({type: 'UPDATE_QUERY', value: query})} className={sheet.button}>Search</button>
                </div>
            </div>
        </header>
    )
}
export default Header
