import { getIndexArray, getTenItemFromIndex } from '../Utility';
export const JobReducer = (state, action) => {
    if(action.type === 'SET_DATA'){
        return {
            ...state,
            data: action.data,
            indexes: getIndexArray(action.data),
            filteredData: getTenItemFromIndex(0, action.data)
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
        }
    }
    return state;
}