

export const showDestination = (destinationID) => {
    return (dispatch, getState) => {
        console.log("SHOW DESTINATION")
        dispatch({
            type: 'SHOW_DESTINATION', 
            destinationID
        })
    
    }
};