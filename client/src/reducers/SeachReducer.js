const initState = {
    searchWord: ''
}

const searchReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_SEARCHWORD':
            return{searchWord: action.word}
        default: return state;
    };
}

export default searchReducer

