import React, { createContext, useReducer, useEffect } from 'react';
import { JobReducer } from '../reducers/JobReducer';
import axios from 'axios';

export const JobContext = createContext();

const JobContextProvider = (props) => {

    const [state, dispatch] = useReducer(JobReducer, {location: 'London', fulltime: false, data: [], error: '', currIndex: 0, indexes: [], filteredData: [], query: ''});

    useEffect(() => {
        if (state.data.length === 0 && state.error === '') {
            const fulltime = state.fulltime ? '&full_time=true' : '';
            axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description='+state.query+'&location='+state.location+fulltime+'', {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' }
            }).then((res) => {
                if(res.data.length === 0){
                    dispatch({ type: 'SET_DATA', data: res.data, error: 'No data' });
                }else{
                    dispatch({ type: 'SET_DATA', data: res.data, error: '' });
                }
            }).catch((err) => dispatch({ type: 'SET_DATA', data: [], error: `${err}` }));
        }
    }, [state]);

    return (
        <JobContext.Provider value={{ state, dispatch }}>
            { props.children}
        </JobContext.Provider>
    );
}

export default JobContextProvider;
