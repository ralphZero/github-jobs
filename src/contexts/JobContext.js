import React, { createContext, useReducer, useEffect } from 'react';
import { JobReducer } from '../reducers/JobReducer';
import axios from 'axios';

export const JobContext = createContext();

const JobContextProvider = (props) => {

    const [state, dispatch] = useReducer(JobReducer, []);

    useEffect(() => {
        console.log(state);
        if (state.length === 0) {
            axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&description=&location=london&full_time=off', {
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
