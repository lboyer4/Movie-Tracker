const initialState = [];

export const setFavorites = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
    return action.favorites
    default:
    return state
  }
}