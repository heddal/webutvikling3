export const setLength = (length) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'GET_LENGTH', 
            length
        })
    
    }
};