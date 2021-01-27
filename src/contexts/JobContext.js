import React, { createContext, useReducer, useEffect } from 'react';
import { JobReducer } from '../reducers/JobReducer';
import axios from 'axios';

export const JobContext = createContext();

const JobContextProvider = (props) => {

    const [state, dispatch] = useReducer(JobReducer, {location: 'london', fulltime: false, data: [], currIndex: 0, indexes: [], filteredData: []});

    useEffect(() => {
        console.log('Effect ran');
        if (state.data.length === 0) {
            const fulltime = state.fulltime ? '&full_time=true' : '';
            axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&description=&location='+state.location+fulltime+'', {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' }
            }).then((res) => dispatch({ type: 'SET_DATA', data: res.data }));
        }
    }, [state]);

    return (
        <JobContext.Provider value={{ state, dispatch }}>
            { props.children}
        </JobContext.Provider>
    );
}

export default JobContextProvider;
