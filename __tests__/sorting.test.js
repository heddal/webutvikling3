import sortBy from '../client/src/actions/SortingActions';

describe('sortBy', () => {
  it('should create an action to sort by a-z', () => {
    const sortType = 'A-Z'
    const expectedAction = {
      type: "SORT_TYPE",
      sortType
    }
    expect(sortBy(sortType)).toEqual(expectedAction)
  })
})