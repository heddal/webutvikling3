export const changeSearchword = (word) => {
    return (dispatch, getState) => {
        console.log("SHALABAIS", word)
        dispatch({
            type: 'CHANGE_SEARCHWORD', word,
        })
    }
};