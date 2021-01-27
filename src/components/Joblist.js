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

    const { state } = useContext(JobContext);

    const jobitems = state.filteredData.map((item) => {
        return (
            <JobItem key={item.id} id={item.id} company={item.company} logo={item.company_logo} title={item.title} type={item.type} location={item.location} date={item.created_at}/>
        );
    })

    return (
        <div style={style}>
            <div className='joblist'>
                { jobitems }
            </div>
            <Pagination />
        </div>
        
    );
}

export default JobList;
