export const setSearchField = (text) => ({
  type: 'SET_SEARCH_FIELD',
  payload: text,
})

const initialState = {
  searchField: '',
}

export const searchRobotsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_SEARCH_FIELD':
      return {
        searchField: action.payload,
      }
    default:
      return state
  }
}
