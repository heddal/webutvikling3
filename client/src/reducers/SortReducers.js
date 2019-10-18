// filter reducers for the locations

const sortReducersDefaultState = {
    word: '',
    sortType: ''
};

const sortReducers = (state = sortReducersDefaultState, action) => {
    console.log('SORTING WOOP')
    switch(action.type) {
        case 'SORT_TYPE':
            return {
                ...state,
                sortType: action.sortType
            };
        default:
            return state;
    }
}

export default sortReducers;

