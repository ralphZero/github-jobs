import React from 'react';
import JobItem from './JobItem';

const JobList = () => {

    const style = {
        display: 'flex', 
        flexDirection: 'column',
        rowGap: '1.8rem' 
    }

    return (
        <div style={style}>
            <div className='joblist'>
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
            </div>
            <div className='pagination'>
                <button className='btn-pagination'>
                    <span className='material-icons'>chevron_left</span>
                </button>
                <button className='btn-pagination selected'>
                    <span>1</span>
                </button>
                <button className='btn-pagination'>
                    <span>2</span>
                </button>
                <button className='btn-pagination'>
                    <span className='material-icons'>chevron_right</span>
                </button>
            </div>
        </div>
        
    );
}

export default JobList;
