import React, { useContext } from 'react';
import { JobContext } from '../contexts/JobContext';

const Pagination = () => {

    const { state, dispatch } = useContext(JobContext);

    const prevButton = state.currIndex !== state.indexes[0] ? 
    (
        <button onClick={() => dispatch({type: 'UPDATE_PAGINATION', index:  state.indexes[state.currIndex - 1]})} className='btn-pagination'>
            <span className='material-icons'>chevron_left</span>
        </button>
    ) : (
        <button className='btn-pagination disabled'>
            <span className='material-icons'>chevron_left</span>
        </button>
    );

    const nextButton = state.currIndex !== state.indexes[state.indexes.length - 1] ? 
    (
        <button onClick={() => dispatch({type: 'UPDATE_PAGINATION', index:  state.indexes[state.currIndex + 1]})} className='btn-pagination'>
            <span className='material-icons'>chevron_right</span>
        </button>
    ) : (
        <button className='btn-pagination disabled'>
            <span className='material-icons'>chevron_right</span>
        </button>
    );

    

    const buttons = state.indexes.map((i, index) => {
        const selected = state.currIndex === i ? 'selected' : '';
        return (
            <button onClick={() => dispatch({ type: 'UPDATE_PAGINATION', index: i })} className={`btn-pagination ${selected}`}>
                <span>{index}</span>
            </button>
        );
    })

    return (
        <div className='pagination'>
            { prevButton}
            { buttons}
            { nextButton }
        </div>
    );
}

export default Pagination;
