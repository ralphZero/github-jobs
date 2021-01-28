import { getIndexArray, getTenItemFromIndex } from '../Utility';
export const JobReducer = (state, action) => {
    if(action.type === 'SET_DATA'){
        return {
            ...state,
            data: action.data,
            error: action.error,
            currIndex: 0,
            indexes: getIndexArray(action.data),
            filteredData: getTenItemFromIndex(0, action.data),
        }
    }
    if(action.type === 'UPDATE_PAGINATION'){
        return {
            ...state,
            filteredData: getTenItemFromIndex(action.index, state.data),
            currIndex: action.index
        }
    }
    if(action.type === 'CHANGE_LOCATION'){
        return {
            ...state,
            location: action.location,
            data: [],
            error: ''
        }
    }
    if(action.type === 'SET_FULLTIME') {
        return {
            ...state,
            fulltime: action.value,
            data: [],
            error: ''
        }
    }
    if(action.type === 'UPDATE_QUERY') {
        return {
            ...state,
            data: [],
            query: action.value,
            error: ''
        }
    }
    return state;
}