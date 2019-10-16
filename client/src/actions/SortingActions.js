// functions that return redux actions


// sort by different types, ex. continent, facilities..
export const sortBy = (sortType) => {
    return (dispatch, getState) => {
        console.log("SORTING")
        dispatch({
            type: 'SORT_TYPE', 
            sortType
        })
    
    }
};