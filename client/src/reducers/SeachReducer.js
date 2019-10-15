const initState = {
    searchWord: ''
}

const searchReducer = (state = initState, action) => {
    console.log("WHATSUPBEBS")
    switch(action.type) {
        case 'CHANGE_SEARCHWORD':
            console.log('searchword', action.word)
    }
    return state
}

export default searchReducer

