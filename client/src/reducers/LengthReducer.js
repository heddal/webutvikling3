const initState = {
    length: 0,
}

const lengthReducer = (state = initState, action) => {
    switch(action.type) {
        case 'GET_LENGTH':
            return{length: action.length}
        default: return state;
    };
}

export default lengthReducer;