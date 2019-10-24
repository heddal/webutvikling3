export const continentFilter = (continent) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'CONTINENT_FILTER', continent
        })
    }
};