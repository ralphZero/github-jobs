import React, { useContext } from 'react';
import JobItem from './JobItem';
import { JobContext } from '../contexts/JobContext';

const JobList = () => {

    const style = {
        display: 'flex', 
        flexDirection: 'column',
        rowGap: '1.8rem' 
    }

    const { state } = useContext(JobContext);

    const jobitems = state.map((item) => {
        return (
            <JobItem key={item.id} id={item.id} company={item.company} logo={item.company_logo} title={item.title} type={item.type} location={item.location} date={item.created_at}/>
        );
    })

    return (
        <div style={style}>
            <div className='joblist'>
                { jobitems }
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
