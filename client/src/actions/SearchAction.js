export const changeSearchword = (word) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'CHANGE_SEARCHWORD', word,
        })
    }
};