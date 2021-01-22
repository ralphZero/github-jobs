import React from 'react';
import Header from '../Header';
import Filters from '../Filters';
import JobList from '../Joblist';

const Index = () => {
    return (
        <div>
            <Header />
            <div className='global'>
                <Filters />
                <JobList />
            </div>
            <footer>
                Ralph Placide @ DevChallenges.io
            </footer>
        </div>

    );
}

export default Index;
