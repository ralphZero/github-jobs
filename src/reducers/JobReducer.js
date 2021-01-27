export const JobReducer = (state, action) => {
    if(action.type === 'SET_DATA'){
        state = action.data;
        return state;
    }
    return state;
}