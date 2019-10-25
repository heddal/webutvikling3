

export const showDestination = (destinationID) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SHOW_DESTINATION', 
            destinationID
        })
    
    }
};