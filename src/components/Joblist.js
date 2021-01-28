import React, { useContext } from 'react';
import JobItem from './JobItem';
import { JobContext } from '../contexts/JobContext';
import Pagination from './Pagination';

const JobList = () => {

    const style = {
        display: 'flex', 
        flexDirection: 'column',
        rowGap: '1.8rem' 
    }

    const messageStyle = {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'var(--gray-text)',
        fontSize: '24px',
        fontFamily: 'Poppins, sans-serif'
    }

    const { state } = useContext(JobContext);

    const jobitems = state.filteredData.map((item) => {
        return (
            <JobItem key={item.id} id={item.id} company={item.company} logo={item.company_logo} title={item.title} type={item.type} location={item.location} date={item.created_at}/>
        );
    });

    const show = state.data.length === 0 && state.error === '' ? (
            <div style={messageStyle}>
                Loading...
            </div>
        ) : (
            state.data.length === 0 && state.error !== '' ? (
                <div style={messageStyle}>
                    {state.error}
                </div>
            ) : (
                <div className='joblist'>
                    { jobitems }
                </div>
            )
        );
    

    return (
        <div style={style}>
            { show }
            <Pagination />
        </div>
        
    );
}

export default JobList;
