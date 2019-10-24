// filter reducers for the locations

const sortReducersDefaultState = {
    sortType: ""
};

const sortReducers = (state = sortReducersDefaultState, action) => {
    console.log('SORTING WOOP')
    switch(action.type) {
        case 'SORT_TYPE':
            console.log(action.sortType)
            return { sortType: action.sortType };
        default:
            return state;
    }
}

export default sortReducers;

