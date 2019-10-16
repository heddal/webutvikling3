// filter reducers for the locations

const filterReducersDefaultState = {
    word: '',
    sortType: ''
};

const filterReducers = (state = filterReducersDefaultState, action) => {
    switch(action.type) {
        case 'SEARCH_WORD':
            return {
                ...state,
                word: action.word
            };
        case 'SORT_TYPE':
            return {
                ...state,
                sortType: action.sortType
            };
        default:
            return state;
    }
}

export default filterReducers;

