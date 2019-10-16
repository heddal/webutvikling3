// reducers for the destinations

const destinationsReducerDefaultState = [];

const destinationReducers = (state = destinationsReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_DESTINATION':
            return [
                ...state,
                action.destination
            ];
        case 'REMOVE_DESTINATION':
            return state.filter(({id}) => id !== action.id);
        default:
            return state;
    }
}

export default destinationReducers;