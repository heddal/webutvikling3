const initState = {
    destinationID: 0
}

const destinationReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SHOW_DESTINATION':
            return{destinationID: action.destinationID}
        default: return state;
    };
}

export default destinationReducer