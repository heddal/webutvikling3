export const continentFilter = (continent) => {
    return (dispatch, getState) => {
        console.log("CHANGEROOOOO", continent)
        dispatch({
            type: 'CONTINENT_FILTER', continent
        })
    }
};