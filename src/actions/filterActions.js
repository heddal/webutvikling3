// functions that return redux actions


// search by a word in a search bar
const searchWord = (word = '') => ({
    type: 'SEARCH_WORD',
    word
});

// sort by different types, ex. continent, facilities..
const sortBy = (sortType) => ({
    type: 'SORT_TYPE',
    sortType
});