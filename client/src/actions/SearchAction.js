export const changeSearchword = (word) => {
    return (dispatch, getState) => {
        console.log("SHALABAIS")
        dispatch({
            type: 'CHANGE_SEARCHWORD', word
        })
    
    }
};