// sort reducers for the locations

const sortReducersDefaultState = {
    sortType: ""
};

const sortReducers = (state = sortReducersDefaultState, action) => {
    switch(action.type) {
        case 'SORT_TYPE':
            return { sortType: action.sortType };
        default:
            return state;
    }
}

export default sortReducers;

