const initState = {
    searchWord: '',
    continent: ''
}

const filterReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CHANGE_SEARCHWORD':
            return {searchWord: action.word, continent: state.continent}
        case 'CONTINENT_FILTER':
            return {searchWord: state.searchWord, continent: action.continent} 
        default: return state
    
}
}

export default filterReducer
